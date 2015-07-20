import piping from 'piping'
import express from 'express'

import server from './src/js/server'

if (process.env.PRODUCTION || piping({hook: true})) {

	var app = express()

	app.use(express.static(__dirname + '/build'))

	server(app)

	app.listen(process.env.PORT || 3000, () => {
		console.log('apping')
	})
}
