import Chai, { expect } from 'chai'
import ChaiAsPromised from 'chai-as-promised'
import Bluebird from 'bluebird'

import api from './api'
import newAltApp from './newAltApp'
import { AltApp } from '../utils'
import actions from './actions'
import stores from './stores'

describe('app api', () => {

	before(() => {
		Chai.use(ChaiAsPromised)
	})

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

	describe('getMostRecentVlog', () => {
		it('should get most recent vlog', () => {
			return expect(api.getMostRecentVlog()).to.eventually.deep.equal(posts[1])
		})
	})

	describe('getPostByTitle', () => {
		it('should get a post with given title', () => {
			// title must be converted to hypens in place of spaces
			var blog = api.getPostByTitle('[Title-of-Blog]')
			var vlog = api.getPostByTitle('[Title-of-Vlog]')

			return expect(Bluebird.join(blog, vlog)).to.eventually.deep.equal(posts)
		})
	})

	describe('getPostsByDate', () => {
		it('should get an array of posts that match a given array of [ year, month, day ]', () => {
			// date array's month is zero-indexed, e.g. April 2015 is [2015, 3]
			var year = api.getPostsByDate([2015])
			var monthVlog = api.getPostsByDate([2015, 5])
			var monthBlog = api.getPostsByDate([2015, 6])

			return expect(Bluebird.join(year, monthVlog, monthBlog)).to.eventually.deep.equal([
				posts,
				[ posts[1] ],
				[ posts[0] ]
			])
		})
	})
})