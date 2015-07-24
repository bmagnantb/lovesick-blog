import express from 'express'

import addAdminRoutes from './admin-routes'
import addRenderEngine from './addRenderEngine'
import addRoutes from './routes'
import {
	checkAuth,
	connectMongo,
	faviconIgnore,
	initPassport
} from './utils'

export default {
	addAdminRoutes,
	addRoutes,
	addRenderEngine,
	checkAuth,
	connectMongo,
	faviconIgnore,
	initPassport,
}