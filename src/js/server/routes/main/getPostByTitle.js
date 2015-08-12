export default function getPostByTitle(req, res) {

	req.mongoDb.collection('posts').findOne(
		req.params,
		(err, doc) => {
			if (err) res.send(err)
			res.send(doc)
		}
	)

}