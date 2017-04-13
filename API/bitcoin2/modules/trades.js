/*
  GOT ALL BTC THAT HAD AN ORDER TO BUY OR SELL
*/
const BlinkTrade = require('../config/conexao')
const fs = require('fs')

// Get informations about historic trades as much as you want
y = 3
const trades = BlinkTrade.trades().then(function(trades) {
  for (var x = 0; x < y; x++) {
    const theDate = new Date(trades[x].date * 1000)
    dateString = theDate.toGMTString()
    
    const date = dateString.split(" ")
    const day = date[0]
    const dayMonth = date[1]
    const month = date[2]
    const year = date[3]
    const hour = date[4]

    // console.log("Trade ID: ", trades[x].tid)
    // console.log("Date: ", day + " " + dayMonth + " " + month + " " + year + " " + hour)
    // // console.log("Date: ", dateString)
    // console.log("Price: ", trades[x].price)
    // console.log("Amount: ", trades[x].amount)
    // if(trades[x].side === 'sell'){
    //   console.log("Side: Vendeu")
    // }else if (trades[x].side === 'buy') {
    //   console.log("Side: Comprou")
    // }else{
    //   console.log(trades[x].side)
    // }
    // console.log("##############################")

var data = {"created_at":Date.now(),
            "trade_id":trades[x].tid,
            "date": day,
            "dayMonth":month,
            "ano":year,
            "hora":hour,
            "price":trades[x].price,
            "amount":trades[x].amount
          }

    fs.appendFile("/home/oracy/Documentos/teste", JSON.stringify(data) + '\r\n', function(err){
      if(err) console.log("Erro")
    })
  }
})
module.exports = trades