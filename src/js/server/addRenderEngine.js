import fs from 'fs'
import _ from 'lodash'

export default function addRenderEngine(app) {
	app.engine('lodash', (filePath, options, callback) => {
		fs.readFile(filePath, (err, buffer) => {
			if (err) throw callback(err)

			var html = _.template(buffer.toString())(options)
			return callback(null, html)
		})
	})

	app.set('views', __dirname + '/templates')
	app.set('view engine', 'lodash')
}