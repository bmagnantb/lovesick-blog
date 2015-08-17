var piping = require('piping')

if (process.env.NODE_ENV === 'production' || piping({hook: true})) {

	require('babel/register')
	var config = require('config')
	var express = require('express')
	var passport = require('passport')
	var session = require('express-session')

	var addRenderEngine = require('./src/js/server/addRenderEngine')
	var utils = require('./src/js/server/utils')
	var initPassport = utils.initPassport
	var authMiddleware = utils.authMiddleware

	// prevent scss requires, must import routes after
	require.extensions['.scss'] = function() {}
	var routes = require('./src/js/server/routes')

	var app = express()

	addRenderEngine(app)
	initPassport(passport)

	app.use('*/favicon.ico', function(req, res, next) {
		res.sendStatus(404)
	})

	app.use('/admin/login',
		express.static(__dirname + '/build/admin/login'),
		routes.adminLogin
	)

	app.use('/admin(?!/login)',
		authMiddleware.session,
		authMiddleware.pInit,
		authMiddleware.pSession,
		function(req, res, next) {
			req.isAuthenticated() ? next() : res.redirect('/admin/login')
		},
		express.static(__dirname + '/build/admin'),
		routes.admin
	)

	app.use(express.static(__dirname + '/build'))

	app.use('/', routes.main)

	app.listen(process.env.PORT || config.get('port'), function() {
		console.log('servered')
	})
}