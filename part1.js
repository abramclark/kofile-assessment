var data = require('order_data')

// show fee totals for each item for each order
var show_order = order =>{
    console.log('Order ID: '+ order.order_number)
    order.order_items.forEach(v => console.log(
        '    Order item '+ v.type +': $'+ data.item_fee(v) ))
    console.log('    Order total: $'+
        order.order_items.map(data.item_fee).reduce((x,y)=>x+y, 0, 0))
    console.log('')
}

data.orders.forEach(show_order)
