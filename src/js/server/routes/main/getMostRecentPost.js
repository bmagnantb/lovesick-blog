export default function getMostRecentPost(req, res) {
	req.mongoDb.collection('posts').findOne(
		req.params,
		{ sort: {timestamp: -1}, limit: 1 },
		(err, doc) => {
			req.mongoDb.close()
			if (err) res.send(err)
			res.send(doc)
		}
	)
}