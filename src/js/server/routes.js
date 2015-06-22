export default server

function server(app) {
	app.get('/blog', function(req, res) {
		res.send({blog: 'blog post'})
	})
}

