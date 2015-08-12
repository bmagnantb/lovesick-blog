import React from 'react'
import Rx from 'rx'
import marked from 'marked'

import { Autobind, makeEventStream } from '../../utils'
import { NewPostForm, Preview } from '../components'

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
		return (
			<div className="new-post">
				<NewPostForm ref="postForm" postType={this.props.data.post.type} handlers={this.handlers} />
				<Preview post={this.props.data.post} />
			</div>
		)
	}
}