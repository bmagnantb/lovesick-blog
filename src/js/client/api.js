import Bluebird from 'bluebird'

export function getBlogPost(id) {
	return new Bluebird((resolve, reject) => {
		setTimeout(() => {
			var response = { id, body: 'blog text' }
			resolve(response)
		}, 1000)
	})
}

export function getPodcast(id) {
	return new Bluebird((resolve, reject) => {
		setTimeout(() => {
			var response = { id, body: 'podcast!' }
			resolve(response)
		}, 1000)
	})
}