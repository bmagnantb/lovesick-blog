import config from 'config'
import { Strategy } from 'passport-local'

var users = config.get('users')

export default function(passport) {

		passport.serializeUser((user, done) => {
			done(null, user.id)
		})

		passport.deserializeUser((id, done) => {
			done(null, findUserById(id))
		})

		passport.use(new Strategy(
			(username, password, done) => {
				var user = findUser(username)
				if (!user) return done(null, false)
				if (user.password !== password) return done(null, false)
				done(null, user)
			}
		))
}

function findUser(username) {
	return users.filter(user => user.username === username)[0]
}

function findUserById(id) {
	return users.filter(user => user.id === id)[0]
}