import { connectMongo } from '../utils'
import render from './render'

export default function addAdminRoutes(app, passport) {

	app.get('/admin/login', (req, res) => {
		res.render('login')
	})

	app.post('/admin/login',
		connectMongo,
		passport.authenticate('local'),
		(req, res) => {
			res.send('/admin/')
		}
	)

	app.get('/admin/', render)
}