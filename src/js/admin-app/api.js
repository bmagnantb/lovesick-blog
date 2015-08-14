import request from 'superbird'

export default {
	submitPost
}

function submitPost(post) {
	return request.post('/admin/api/new-post').query(post).end()
}