import config from 'config'
import { Strategy } from 'passport-local'

import { getDb } from '../connectMongo'

export default function(passport) {

	passport.serializeUser((user, done) => {
		console.log('serializing', user)
		done(null, user.id)
	})

	passport.deserializeUser((id, done) => {
		getDb().then((db) => {
			db.collection('users').findOne({id: id}, (err, doc) => {
				db.close()
				console.log('deserializing', doc)
				done(null, doc)
			})
		})
	})

	passport.use(new Strategy({
			passReqToCallback: true
		},
		(req, username, password, done) => {
			req.mongoDb.collection('users').findOne({username}, (err, doc) => {
				req.mongoDb.close()
				if (!doc) return done(null, false)
				if (doc.password !== password) return done(null, false)
				done(null, doc)
			})

		}
	))
}