export default function getPostsByDate(req, res) {
	var params = {}

	for (var key in req.params) {
		if (req.params[key] !== undefined) params[`date.${key}`] = Number.parseInt(req.params[key])
	}

	req.mongoDb.collection('posts').find(params)
		.toArray((err, docs) => {
			if (err) res.send(err)
			res.send(docs)
		})
}