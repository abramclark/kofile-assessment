var data = require('order_data')

// show amount to each fund per order
var show_order = order =>{
    console.log('Order ID: '+ order.order_number)
    data.order_funds(order).forEach(v => console.log(
        '    Fund - '+ v.name +': $'+ v.amount))
    console.log('')
}

data.orders.forEach(show_order)
