import express from 'express'
import passport from 'passport'

import { connectMongo } from '../../utils'
import newPost from './newPost'
import render from './render'

var router = express.Router()

router.post('/api/new-post',
	connectMongo,
	newPost
)

router.get('*', render)

export default router