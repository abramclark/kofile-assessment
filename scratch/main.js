var orders, fees, main = ()=>{
    console.log(orders)
    console.log(fees)
}, load = name=>{ return (err, json)=>{
    if(err) throw err
    window[name] = json
    if(orders && fees) main()
}}

d3.json('fees.json', load('fees'))
d3.json('orders.json', load('orders'))
