import Bluebird from 'bluebird'

var blogResponse = {
	type: 'blog',
	body: 'This is the stuff I have written. Cause I\'m a writer'
}

var vlogResponse = {
	type: 'vlog',
	youtube_url: 'youtube.com/867-5309'
}

export function getPost(id) {
	return new Bluebird((resolve, reject) => {
		setTimeout(() => {
			var response = Math.round(Math.random()) === 1 ? blogResponse : vlogResponse
			response.id = id
			resolve(response)
		}, 1000)
	})
}