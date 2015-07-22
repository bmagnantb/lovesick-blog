import render from './render'

export default function addAdminRoutes(app, passport) {

	app.get('/admin/login', (req, res) => {
		res.render('login')
	})

	app.post('/admin/login',
		passport.authenticate('local'),
		(req, res) => {
			res.send('/admin/authenticated')
		}
	)

	app.get('/admin/authenticated', (req, res) => {
		res.render('authenticated')
	})

	app.get('/admin', (req, res) => {
		console.log(req.user)
		res.redirect('/admin/login')
	})
}