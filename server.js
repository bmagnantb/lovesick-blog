import piping from 'piping'
import express from 'express'
import passport from 'passport'
import session from 'express-session'

import {
	addRenderEngine,
	addAdminRoutes,
	addRoutes,
	faviconIgnore,
	initPassport,
	checkAuth
} from './src/js/server'

if (process.env.PRODUCTION || piping({hook: true})) {

	var app = express()

	addRenderEngine(app)
	app.use(faviconIgnore)

	// passport stuff
	app.use(session({ secret: 'domoarigato', resave: false, saveUninitialized: false}))
	initPassport(passport)
	app.use(passport.initialize())
	app.use(passport.session())

	// check auth on /admin routes
	app.use('/admin', checkAuth)

	app.use(express.static(__dirname + '/build'))

	addAdminRoutes(app, passport)
	addRoutes(app)

	app.listen(process.env.PORT || 3000, () => {
		console.log('apping')
	})
}