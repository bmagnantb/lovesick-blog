import express from 'express'

import { connectMongo } from '../../utils'

import getMostRecentPost from './getMostRecentPost'
import getPostByTitle from './getPostByTitle'
import getPostsByDate from './getPostsByDate'
import render from './render'

var counter = 0
var router = express.Router()

router.get('/api/mostrecent/:type', connectMongo, getMostRecentPost)

router.get('/api/postbytitle/:title', connectMongo, getPostByTitle)

router.get('/api/postsbydate/:year/:month?/:day?', connectMongo, getPostsByDate)

router.get('*', render)

export default router
