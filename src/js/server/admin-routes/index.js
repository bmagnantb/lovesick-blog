import render from './render'

export default function addAdminRoutes(app, passport) {

	app.get('/admin/login', (req, res) => {
		res.render('login')
	})

	app.post('/admin/login',
		passport.authenticate('local'),
		(req, res) => {
			res.send('/admin/')
		}
	)

	app.get('/admin', render)
}