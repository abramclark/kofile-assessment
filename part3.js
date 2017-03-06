var http = require('http'), data = require('order_data'), port = 1212

var prices = input =>{
    input.forEach(order =>{
        order.order_items.forEach(item => item.price = data.item_fee(item))
        order.total = order.order_items.map(i => i.price).reduce((x,y)=>x+y, 0, 0)
    })
    return input
}
var funds = input =>{
    input.forEach(order => order.funds = data.order_funds(order))
    return input
}

var not_found = res =>{
    res.statusCode = 404
    res.end('{"error":1}')
}, bad_input = (res, msg, code) =>{
    res.statusCode = 400
    if(!code) code = 2
    res.end('{"error":'+ code +',"msg":"'+ msg +'"}')
}, json = (res, out) =>{
    res.statusCode = 200
    res.end(JSON.stringify(out))
}
var server = http.createServer((req, res)=>{
    console.log('serving ' + req.url)
    res.setHeader('Content-Type', 'application/json')
    if(req.method != 'POST') return not_found(res)

    var body = ''
    req.on('data', data =>{
        body += data
        if(body.length > 1e6) req.connection.destroy()
    })
    req.on('end', ()=>{
        try{ var input = JSON.parse(body) }
        catch(e){ bad_input(res, "JSON parse error") }
        if(req.url == '/prices') return json(res, prices(input))
        else if(req.url == '/funds') return json(res, funds(input))
        else return not_found(res)
    })
})
server.listen(port, 'localhost', ()=>{
    console.log('listening at http://localhost:'+ port)
    console.log('POST order JSON to /prices or /funds')
})
