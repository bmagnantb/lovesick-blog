import React from 'react/addons'
import Chai, { expect } from 'chai'
import ChaiThings from 'chai-things'
import { Link } from 'react-router'

import BlogPost from './BlogPost'
import DateSearch from './DateSearch'
import PostListItem from './PostListItem'
import Sidebar from './Sidebar'
import VlogPost from './VlogPost'
import { mockPosts } from '../../test-utils'

var { TestUtils } = React.addons
Chai.use(ChaiThings)

describe('app components', () => {


	/* -------- BlogPost ---------- */

	describe('BlogPost', () => {

		var mock
		before(() => {
			var renderer = TestUtils.createRenderer()
			renderer.render(<BlogPost post={mockPosts[0]} />)
			mock = renderer.getRenderOutput()
		})

		it('should render a div with class blog-post', () => {
			expect(mock.type).to.equal('div')
			expect(mock.props.className).to.equal('blog-post')
		})

		it('should render a child h2 with a title', () => {
			expect(mock.props.children[0].type).to.equal('h2')
			expect(mock.props.children[0].props.children).to.be.a('string')
		})

		it('should render a child div with post body in dangerouslySetInnerHTML', () => {
			expect(mock.props.children[1].type).to.equal('div')
			expect(mock.props.children[1].props.dangerouslySetInnerHTML.__html).to.be.a('string')
		})
	})


	/* ---------- DateSearch ------------- */

	describe('DateSearch', () => {

		var mock, mock2
		before(() => {
			var renderer = TestUtils.createRenderer()
			renderer.render(<DateSearch results={[]} />)
			mock = renderer.getRenderOutput()
			renderer.render(<DateSearch results={mockPosts} />)
			mock2 = renderer.getRenderOutput()
		})

		it('should render a div', () => {
			expect(mock.type).to.equal('div')
			expect(mock2.type).to.equal('div')
		})

		it('should render unique-keyed children PostListItem components if results exist', () => {
			expect(mock2.props.children).to.have.length(2)
			expect(mock2.props.children).to.all.have.property('type', PostListItem)
			mock2.props.children.forEach((child, index) => {
				expect(child.key).to.equal(`post-${mockPosts[index].timestamp}`)
			})
		})

		it('should render no children when there are no results', () => {
			expect(mock.props.children).to.have.length(0)
		})
	})


	/* --------- PostListItem ------------- */

	describe('PostListItem', () => {

		var mock
		before(() => {
			var renderer = TestUtils.createRenderer()
			renderer.render(<PostListItem post={mockPosts[1]} />)
			mock = renderer.getRenderOutput()
		})

		it('should render a div with two children', () => {
			expect(mock.type).to.equal('div')
			expect(mock.props.children).to.have.length(2)
		})

		it('should render an h3 that contains a Link component', () => {
			expect(mock.props.children[0].type).to.equal('h3')
			expect(mock.props.children[0].props.children.type).to.equal(Link)
		})

		it('should render a Link component to "post" with params {postRoute: post-route} that displays the post title', () => {
			var link = mock.props.children[0].props.children
			expect(link.props.to).to.equal('post')
			expect(link.props.params).to.deep.equal({postRoute: mockPosts[1].route})
			expect(link.props.children).to.be.a('string').and.equal(mockPosts[1].title)
		})

		it('should render an h5 with date of post', () => {
			expect(mock.props.children[1].type).to.equal('h5')
			expect(mock.props.children[1].props.children).to.equal((new Date(mockPosts[1].timestamp)).toUTCString())
		})
	})


	/* ----------- Sidebar ------------ */

	describe('Sidebar', () => {

		var mock
		before(() => {
			var renderer = TestUtils.createRenderer()
			renderer.render(<Sidebar />)
			mock = renderer.getRenderOutput()
		})

		it('should render an aside tag with class sidebar that contians a p tag with content', () => {
			expect(mock.type).to.equal('aside')
			expect(mock.props.className).to.equal('sidebar')
			expect(mock.props.children.type).to.equal('p')
			expect(mock.props.children.props.children).to.be.a('string')
		})
	})


	/* ------------ VlogPost -------------- */

	describe('VlogPost', () => {

		var mock
		before(() => {
			var renderer = TestUtils.createRenderer()
			renderer.render(<VlogPost post={mockPosts[1]} />)
			mock = renderer.getRenderOutput()
		})

		it('should render a div with class vlog-post', () => {
			expect(mock.type).to.equal('div')
			expect(mock.props.className).to.equal('vlog-post')
		})

		it('should render an iframe', () => {
			expect(mock.props.children[0].type).to.equal('iframe')
		})

		it('should render an h2 with title', () => {
			expect(mock.props.children[1].type).to.equal('h2')
			expect(mock.props.children[1].props.children).to.be.a('string')
		})

		it('should render an h5 with post url', () => {
			expect(mock.props.children[2].type).to.equal('h5')
			expect(mock.props.children[2].props.children).to.be.a('string')
		})

		it('should render a div with post body in dangerouslySetInnerHTML', () => {
			expect(mock.props.children[3].type).to.equal('div')
			expect(mock.props.children[3].props.dangerouslySetInnerHTML.__html).to.be.a('string')
		})
	})
})
