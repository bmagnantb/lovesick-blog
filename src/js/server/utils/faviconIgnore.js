export default function(req, res, next) {
	if (req.path === '/favicon.ico') res.sendStatus(404)
	next()
}