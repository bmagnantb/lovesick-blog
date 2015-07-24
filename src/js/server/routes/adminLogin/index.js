import express from 'express'
import passport from 'passport'

import { authMiddleware, checkAuth, connectMongo } from '../../utils'

var router = express.Router()

router.get('/',
	checkAuth,
	(req, res) => {
		res.render('login')
	}
)

router.post('/',
	authMiddleware.session,
	authMiddleware.pInit,
	authMiddleware.pSession,
	connectMongo,
	passport.authenticate('local'),
	(req, res) => {
		res.send('/admin/panel')
	}
)

export default router