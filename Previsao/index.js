const bitcoinValue = require('./bitcoinValue')
const realValue = require('./realValue')
const lucro = require('./lucro')

// lucro(bitcoinValue(202.01, 0.005, 3666.97), realValue(3719.00, 0.05481363, 0.005), 0.1)

btc = bitcoinValue(1300, 0.005, 3601.02)
realValue(3700, btc, 0.005)