import express from 'express'

import addRenderEngine from './addRenderEngine'
import addRoutes from './routes'

export default function server(app) {

	addRenderEngine(app)

	app.use((req, res, next) => {
		if (req.path === '/favicon.ico') res.sendStatus(404)
		next()
	})

	addRoutes(app)
}