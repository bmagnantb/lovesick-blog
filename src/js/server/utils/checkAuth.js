export default function(req, res, next) {
	if (req.isAuthenticated() && req.path.indexOf('/login') === -1) return next()
	if (req.isAuthenticated()) return res.redirect('/admin/authenticated')
	if (req.path.indexOf('/login') !== -1) return next()
	return res.redirect('/admin/login')
}