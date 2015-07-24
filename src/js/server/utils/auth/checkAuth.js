export default function(req, res, next) {
	console.log(req.path, req.isAuthenticated())
	if (req.isAuthenticated()) return res.redirect('/admin/panel')
	next()
	// if (req.isAuthenticated() && req.path.indexOf('/login') === -1) return next()
	// if (req.isAuthenticated()) return res.redirect('/admin/panel')
	// if (req.path.indexOf('/login') !== -1) return next()
	// return res.redirect('/admin/login')
}