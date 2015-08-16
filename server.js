import piping from 'piping'
import express from 'express'
import passport from 'passport'
import session from 'express-session'

import addRenderEngine from './src/js/server/addRenderEngine'
import { initPassport, authMiddleware } from './src/js/server/utils'

if (process.env.NODE_ENV === 'production' || piping({hook: true})) {

	// prevent scss requires, must import routes after
	require.extensions['.scss'] = () => {}
	var { admin, adminLogin, main } = require('./src/js/server/routes')

	var app = express()

	addRenderEngine(app)
	initPassport(passport)

	app.use('*/favicon.ico', (req, res, next) => {
		res.sendStatus(404)
	})

	app.use('/admin/login',
		express.static(__dirname + '/build/admin/login'),
		adminLogin
	)

	app.use('/admin(?!/login)',
		authMiddleware.session,
		authMiddleware.pInit,
		authMiddleware.pSession,
		(req, res, next) => req.isAuthenticated() ? next() : res.redirect('/admin/login'),
		express.static(__dirname + '/build/admin'),
		admin
	)

	app.use(express.static(__dirname + '/build'))

	app.use('/', main)

	app.listen(process.env.PORT || 3000, () => {
		console.log('apping')
	})
}