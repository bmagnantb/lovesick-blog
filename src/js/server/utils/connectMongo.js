import Bluebird from 'bluebird'
import MongoClient from 'mongodb'

var mongoConnect = Bluebird.promisify(MongoClient.connect)
var mongoUrl = 'mongodb://localhost:27017/lovesick'

export default function middleware(req, res, next) {
	MongoClient.connect(mongoUrl, (err, db) => {
		if (err) return res.status(500).send('failed to connect to database')
		req.mongoDb = db
		next()
	})
}

export function getDb() {
	return mongoConnect(mongoUrl)
}