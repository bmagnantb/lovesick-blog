import React from 'react/addons'
import { expect } from 'chai'

import HomeView from './HomeView'
import PostView from './PostView'
import { BlogPost, DateSearch, Sidebar, VlogPost } from '../components'
import { mockPosts } from '../../test-utils'

var { TestUtils } = React.addons

describe('app views:', () => {


/* ---------- HOME VIEW ------------- */

	describe('home,', () => {

		context('when it has no store data,', () => {

			var mock
			before(() => {
				var renderer = TestUtils.createRenderer()
				renderer.render(<HomeView storeData={{
					currentPost: {}
				}} />)
				mock = renderer.getRenderOutput()
			})

			it('should render an empty div with class post-view', () => {
				expect(mock.type).to.equal('div')
				expect(mock.props.className).to.equal('post-view')
				expect(mock.props.children).to.not.exist
			})
		})

		context('when it has a current post in store data,', () => {

			var mock
			before(() => {
				var renderer = TestUtils.createRenderer()
				mock = renderer.render(<HomeView storeData={{ currentPost: mockPosts[1] }} />)
				mock = renderer.getRenderOutput()
			})

			it('should render a div with class home-view', () => {
				expect(mock.type).to.equal('div')
				expect(mock.props.className).to.equal('home-view')
			})

			it('should render two children in div', () => {
				expect(mock.props.children.length).to.equal(2)
			})

			it('should render a main tag with class home', () => {
				expect(mock.props.children[0].type).to.equal('main')
				expect(mock.props.children[0].props.className).to.equal('home')
			})

			it('should render a VlogPost ReactElement', () => {
				expect(mock.props.children[0].props.children.type).to.equal(VlogPost)
			})

			it('should render a Sidebar ReactElement', () => {
				expect(mock.props.children[1].type).to.equal(Sidebar)
			})
		})
	})


/* ---------- POST VIEW ---------- */

	describe('post,', () => {

		context('when it has no store data and is not a date search,', () => {

			var mock
			before(() => {
				var renderer = TestUtils.createRenderer()
				renderer.render(<PostView storeData={{
					currentPost: {},
					dateSearch: {
						is: false
					}
				}} />)
				mock = renderer.getRenderOutput()
			})

			it('should render an empty div with class post-view', () => {
				expect(mock.type).to.equal('div')
				expect(mock.props.className).to.equal('post-view')
				expect(mock.props.children).to.not.exist
			})
		})

		context('when it is a date search,', () => {

			var mock, mock2
			before(() => {
				var renderer = TestUtils.createRenderer()
				renderer.render(<PostView storeData={{
					currentPost: {},
					dateSearch: {
						is: true,
						date: [2015],
						results: mockPosts
					}
				}} />)
				mock = renderer.getRenderOutput()
				renderer.render(<PostView storeData={{
					currentPost: mockPosts[1],
					dateSearch: {
						is: true,
						date: [2015, 6],
						results: mockPosts[0]
					}
				}} />)
				mock2 = renderer.getRenderOutput()
			})

			it('should render a div with class post-view', () => {
				expect(mock.type).to.equal('div')
				expect(mock.props.className).to.equal('post-view')
				expect(mock2.type).to.equal('div')
				expect(mock2.props.className).to.equal('post-view')
			})

			it('should render a main tag with a DateSearch component child', () => {
				expect(mock.props.children[0].type).to.equal('main')
				expect(mock.props.children[0].props.children.type).to.equal(DateSearch)
				expect(mock2.props.children[0].type).to.equal('main')
				expect(mock2.props.children[0].props.children.type).to.equal(DateSearch)
			})

			it('should render a Sidebar component', () => {
				expect(mock.props.children[1].type).to.equal(Sidebar)
				expect(mock2.props.children[1].type).to.equal(Sidebar)
			})
		})

		context('when current post is a blog', () => {

			var mock
			before(() => {
				var renderer = TestUtils.createRenderer()
				renderer.render(<PostView storeData={{
					currentPost: mockPosts[0],
					dateSearch: {
						is: false
					}
				}} />)
				mock = renderer.getRenderOutput()
			})

			it('should render a div with class post-view', () => {
				expect(mock.type).to.equal('div')
				expect(mock.props.className).to.equal('post-view')
			})

			it('should render a main tag with a BlogPost component child', () => {
				expect(mock.props.children[0].type).to.equal('main')
				expect(mock.props.children[0].props.children.type).to.equal(BlogPost)
			})

			it('should render a Sidebar component', () => {
				expect(mock.props.children[1].type).to.equal(Sidebar)
			})
		})

		context('when current post is a vlog', () => {

			var mock
			before(() => {
				var renderer = TestUtils.createRenderer()
				renderer.render(<PostView storeData={{
					currentPost: mockPosts[1],
					dateSearch: {
						is: false
					}
				}} />)
				mock = renderer.getRenderOutput()
			})

			it('should render a div with class post-view', () => {
				expect(mock.type).to.equal('div')
				expect(mock.props.className).to.equal('post-view')
			})

			it('should render a main tag with a VlogPost component child', () => {
				expect(mock.props.children[0].type).to.equal('main')
				expect(mock.props.children[0].props.children.type).to.equal(VlogPost)
			})

			it('should render a Sidebar component', () => {
				expect(mock.props.children[1].type).to.equal(Sidebar)
			})
		})
	})
})