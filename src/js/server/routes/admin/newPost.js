export default function newPost(req, res) {

	var now = new Date()
	var newPost = Object.assign({}, req.query, {
		timestamp: Date.parse(now),
		date: {
			year: now.getFullYear(),
			month: now.getMonth(),
			day: now.getDate()
		},
		route: req.query.title.toLowerCase().replace(/ /g, '-')
	})

	req.mongoDb.collection('posts').insertOne(newPost, (err, resp) => {
		req.mongoDb.close()
		if (err) res.send(err)
		res.send(resp)
	})
}