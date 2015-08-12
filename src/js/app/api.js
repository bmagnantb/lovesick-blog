import Bluebird from 'bluebird'
import request from 'superbird'
import _ from 'lodash'

var serverPrefix = 'http://localhost:3000'

export default {
	getMostRecentVlog,
	getPostByTitle,
	getPostsByDate
}

function getMostRecentVlog() {
	return request.get(`${serverPrefix}/api/mostrecent/vlog`).end()
}

function getPostByTitle(title) {
	return request.get(`${serverPrefix}/api/postbytitle/${title}`).end()
}

function getPostsByDate(dateArray) {
	if (dateArray[1]) dateArray[1] = dateArray[1] - 1
	var dateUrlString = dateArray.join('/')
	return request.get(`${serverPrefix}/api/postsbydate/${dateUrlString}`).end()
}

