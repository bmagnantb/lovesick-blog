import connectMongo from './connectMongo'
import { authMiddleware, checkAuth, initPassport } from './auth'

export default {
	authMiddleware,
	checkAuth,
	connectMongo,
	initPassport
}