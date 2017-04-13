// REST Transport
const BlinkTradeRest = require("blinktrade").BlinkTradeRest
const BlinkTrade = new BlinkTradeRest({
  prod: false,
  currency: "BRL",
  key: "DfN8DBCGsZQAVQRdvBMjzpclhEovFSQshwegFR00mO8",
  secret: "7Q9Xbrk1qMemVmyBBaUIBzKlL7AZjVSpsDkdPLM7eyg",
})

// WebSocket Transport
const BlinkTradeWS = require("blinktrade").BlinkTradeWS
const blinktrade = new BlinkTradeWS({ prod: false })
// console.log(`balance`, blinktrade.balance)

blinktrade.connect().then(function() {
  return blinktrade.heartbeat();
}).then(function(heartbeat) {
  console.log(heartbeat.Latency);
});

BlinkTrade.ticker().then(function(ticker) {
  console.log(ticker);
});

module.exports = blinktrade