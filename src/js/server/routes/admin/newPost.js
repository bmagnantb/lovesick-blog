export default function newPost(req, res) {

	var now = new Date()
	var newPost = Object.assign({}, {
		timestamp: Date.parse(now),
		date: {
			year: now.getFullYear(),
			month: now.getMonth(),
			day: now.getDate()
		},
		route: req.query.title.replace(/ /g, '-')
	})

	req.mongoDb.collection('posts').insertOne(newPost, (err, resp) => {
		req.mongoDb.close()
		if (err) res.send(err)
		res.send(resp)
	})
}