const BlinkTrade = require('../config/conexao')
const blinktrade = require('../config/conexaoAPI')

// console.log(`balance`, blinktrade.balance)

const success = ( data ) => console.log(`success> `, data)
const error = ( err ) => console.log(`error> `, err)

// blinktrade.balance(success, error)

// blinktrade. ().then(function(balance) {
//   console.log(balance);
// }).catch(function( err ) {
//   console.log( err );
// })

// const stats = BlinkTrade.stats().then(function(stats){
//     console.log(`stats`)
// })

// console.log(`BlinkTrade`, BlinkTrade)
console.log(`blinktrade`, blinktrade.profile())