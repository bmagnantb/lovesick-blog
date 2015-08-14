export default function newPost(req, res) {

	var now = new Date()
	req.query.timestamp = Date.parse(now)
	req.query.date = {
		year: now.getFullYear(),
		month: now.getMonth(),
		day: now.getDate()
	}

	req.mongoDb.collection('posts').insertOne(req.query, (err, resp) => {
		if (err) res.send(err)
		res.send(resp)
	})
}