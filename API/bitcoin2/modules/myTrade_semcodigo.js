const BlinkTrade = require('../config/conexaoAPI')

// WebSocket Transport
const BlinkTradeWS = require("blinktrade").BlinkTradeWS
const BlinkTrade2 = new BlinkTradeWS({ prod: true })

BlinkTrade.myOrders().then(function(myOrders) {
  // myOrders.OrdListGrp.length
  const mapToCreateCompra = ( el, i ) => {
    if (myOrders.OrdListGrp[i].Side === '1') {
      const myOrders = {"OrderDate": myOrders.OrdListGrp[x].OrderDate,
      "Price": (myOrders.OrdListGrp[x].Price/100000000).toFixed(2),
      "Volume": (myOrders.OrdListGrp[x].Volume/100000000).toFixed(2),
      "CumQty QuantidadeMoedascomprada" :(myOrders.OrdListGrp[x].CumQty/100000000).toFixed(8)}
    }
  })
}