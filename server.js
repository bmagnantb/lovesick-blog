"use strict"

if (!require('piping')({hook: true})) return false

require('babel/register')

var express = require('express')
var app = express()

app.use(express.static(__dirname + '/build'))

require('./src/js/server/addRenderEngine')(app)

require('./src/js/server/routes')(app)

app.listen(process.env.PORT || 3000, function() {
	console.log('apping')
})