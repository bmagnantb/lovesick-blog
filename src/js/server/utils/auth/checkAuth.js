export default function(req, res, next) {
	if (req.isAuthenticated()) return res.redirect('/admin/panel')
	next()
}