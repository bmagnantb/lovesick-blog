import React from 'react'
import Rx from 'rx'
import marked from 'marked'

import { Autobind, makeEventStream } from '../../utils'
import { NewPostForm } from '../components'
import { BlogPost, VlogPost } from '../../app/components'

require('./NewPostView.scss')

marked.setOptions({ sanitize: true })

export default class NewPostView {

	componentWillMount() {
		var updateTitle$ = makeEventStream()
		updateTitle$
			.debounce(400)
			.map(evt => React.findDOMNode(this.refs.postForm.refs.title).value)
			.subscribe(title => this.props.actions.updatePost({ title }))

		var updateBody$ = makeEventStream()
		updateBody$
			.debounce(400)
			.map(evt => React.findDOMNode(this.refs.postForm.refs.body).value)
			.map(markdown => marked(markdown))
			.subscribe(body => this.props.actions.updatePost({ body }))

		var updateUrl$ = makeEventStream()
		updateUrl$
			.debounce(400)
			.map(evt => React.findDOMNode(this.refs.postForm.refs.url).value)
			.subscribe(url => this.props.actions.updatePost({ url }))

		this.handlers = {
			updateTitle$,
			updateBody$,
			updateUrl$
		}
	}

	render() {
		var post
		if (this.props.data.post.type === 'blog') post = <BlogPost post={this.props.data.post} />
		else if (this.props.data.post.type === 'vlog') post = <VlogPost post={this.props.data.post} />
		else throw new Error('NewPostView requires a post with a type blog or vlog')

		return (
			<div className="new-post">
				<NewPostForm ref="postForm" postType={this.props.data.post.type} handlers={this.handlers} />
				{post}
			</div>
		)
	}
}