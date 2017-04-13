
const path = require('path')
const express = require('express')
const app = express()

app.set('/file/:name/', path.join(__dirname, 'modules'))
app.set('view engine', 'jade')

app.get('/current', function( req, res ){
    res.render('index')
})