import { Strategy } from 'passport-local'

import users from './keys/users'

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
				console.log('found user', user)
				if (!user) return done(null, false)
				if (user.password !== password) return done(null, false)
				done(null, user)
			}
		))
}

function findUser(username) {
	console.log(users)
	return users.filter(user => user.username === username)[0]
}

function findUserById(id) {
	return users.filter(user => user.id === id)[0]
}