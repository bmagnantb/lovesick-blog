import Bluebird from 'bluebird'
import _ from 'lodash'

var posts = [
	{
		type: 'blog',
		title: '[Title-of-Blog]',
		timestamp: 1438017638334,
		date: [ 2015, 6, 27 ],
		body: '<p>This is the stuff I have written. Cause I\'m a writer</p>'
	},
	{
		type: 'vlog',
		title: '[Title-of-Vlog]',
		timestamp: 1435704148295,
		date: [ 2015, 5, 30 ],
		url: 'youtube.com/867-5309',
		body: '<p>Little blurb about the video</p>'
	}
]

export function getMostRecentVlog() {
	return new Bluebird((resolve, reject) => {
		setTimeout(() => {
			var response = posts.filter(post => post.type === 'vlog')[0]
			resolve(response)
		}, 1000)
	})
}

export function getPostByTitle(title) {
	return new Bluebird((resolve, reject) => {
		setTimeout(() => {
			var response = posts.filter(post => post.title === title)[0]
			resolve(response)
		}, 1000)
	})
}

export function getPostsByDate(dateArray) {
	return new Bluebird((resolve, reject) => {
		setTimeout(() => {
			dateArray = dateArray.map(string => Number.parseInt(string))
			var response = posts.filter(post => _.isEqual(post.date.slice(0, dateArray.length), dateArray))
			resolve(response)
		})
	})
}