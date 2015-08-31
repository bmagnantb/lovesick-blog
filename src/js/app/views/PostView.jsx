import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import { getPostByTitle } from '../actions'
import { BlogPost, DateSearch, PostLoadingError, Sidebar, VlogPost } from '../components'

require('./PostView.scss')

class PostView {
	componentWillMount() {
		if (_.isEmpty(this.props.post)) this.props.dispatch(getPostByTitle(this.props.params.postRoute))
	}

	render() {
		var PostComponent
		if (this.props.error)
			PostComponent = <PostLoadingError reload={this.reloadPost.bind(this)} />
		else if (this.props.requesting || _.isEmpty(this.props.post))
			PostComponent = <div>Loading</div>
		else if (this.props.post.type === 'blog')
			PostComponent = <BlogPost post={this.props.post} />
		else if (this.props.post.type === 'vlog')
			PostComponent = <VlogPost post={this.props.post} />

		return (
			<div className="post-view">
				<main>
					{PostComponent}
				</main>
				<Sidebar />
			</div>
		)
	}

	reloadPost() {
		this.props.dispatch(getPostByTitle(this.props.params.postRoute))
	}
}

export default connect(select)(PostView)

function select(state, props) {
	var { requesting, error, cache } = state.posts
	return {
		post: cache[props.params.postRoute],
		requesting,
		error
	}
}