import expressSession from 'express-session'
import passport from 'passport'

var session = expressSession({ secret: 'domoarigato', resave: false, saveUninitialized: false})
var pInit = passport.initialize()
var pSession = passport.session()

export default {
	session,
	pInit,
	pSession
}