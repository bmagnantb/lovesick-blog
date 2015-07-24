import express from 'express'

import render from './render'

var router = express.Router()

router.get('*', render)

export default router
