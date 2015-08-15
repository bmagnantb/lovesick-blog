export default function getPostByTitle(req, res) {

	var query = { route: req.params.title }

	req.mongoDb.collection('posts').findOne(
		query,
		(err, doc) => {
			req.mongoDb.close()
			if (err) res.send(err)
			res.send(doc)
		}
	)

}