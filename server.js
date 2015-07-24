import piping from 'piping'
import express from 'express'
import passport from 'passport'
import session from 'express-session'

import addRenderEngine from './src/js/server/addRenderEngine'
import { initPassport, authMiddleware } from './src/js/server/utils'

import { admin, adminLogin, main } from './src/js/server/routes'

if (process.env.PRODUCTION || piping({hook: true})) {

	var app = express()

	addRenderEngine(app)
	initPassport(passport)

	app.use('(/*)*/favicon.ico', (req, res, next) => {
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
		(req, res, next) => req.isAuthenticated ? next() : null,
		express.static(__dirname + '/build/admin'),
		admin
	)

	app.use(express.static(__dirname + '/build'))

	app.use('*',
		main
	)

	app.listen(process.env.PORT || 3000, () => {
		console.log('apping')
	})
}