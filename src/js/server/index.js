import express from 'express'

import addRenderEngine from './addRenderEngine'
import addAdminRoutes from './admin-routes'
import addRoutes from './routes'
import faviconIgnore from './faviconIgnore'
import initPassport from './initPassport'
import checkAuth from './utils/checkAuth'

export default {
	addRenderEngine,
	addAdminRoutes,
	addRoutes,
	faviconIgnore,
	initPassport,
	checkAuth
}