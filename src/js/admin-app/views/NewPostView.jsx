import Rx from 'rx'
import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

import { Autobind, makeEventStream } from '../../utils'
import { setPostType, updatePost } from '../actions'
import { NewPostForm } from '../components'
import { BlogPost, VlogPost } from '../../app/components'

require('./NewPostView.scss')

marked.setOptions({ sanitize: true })

class NewPostView {

	componentWillMount() {

		var updateTitle$ = makeEventStream()
		updateTitle$
			.debounce(400)
			.map(evt => React.findDOMNode(this.refs.postForm.refs.title).value)
			.subscribe(title => this.props.dispatch(updatePost({ title })))

		var updateBody$ = makeEventStream()
		updateBody$
			.debounce(400)
			.map(evt => React.findDOMNode(this.refs.postForm.refs.body).value)
			.map(markdown => marked(markdown))
			.subscribe(body => this.props.dispatch(updatePost({ body })))

		var updateUrl$ = makeEventStream()
		updateUrl$
			.debounce(400)
			.map(evt => React.findDOMNode(this.refs.postForm.refs.url).value)
			.subscribe(url => this.props.dispatch(updatePost({ url })))

		this.handlers = {
			updateTitle$,
			updateBody$,
			updateUrl$
		}
	}

	render() {
		var post = this.props.post.type === 'blog'
			? <BlogPost post={this.props.post} />
			: <VlogPost post={this.props.post} />

		return (
			<div className="new-post">
				<NewPostForm
					ref="postForm"
					postType={this.props.post.type}
					setPostType={this.setPostType.bind(this)}
					handlers={this.handlers} />
				{post}
			</div>
		)
	}

	setPostType(evt) {
		this.props.dispatch(setPostType(evt.target.value))
	}
}

export default connect(select)(NewPostView)

function select(state, props) {
	return {
		post: state.newPost
	}
}

