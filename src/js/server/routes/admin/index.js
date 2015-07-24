import express from 'express'
import passport from 'passport'

import { connectMongo } from '../../utils'
import newBlog from './newBlog'
import render from './render'

var router = express.Router()

router.post('/newBlog',
	connectMongo,
	newBlog
)

router.get('*', render)

export default router