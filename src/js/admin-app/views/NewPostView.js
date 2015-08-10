import React from 'react'
import Rx from 'rx'
import marked from 'marked'

import { Autobind, makeEventStream } from '../../utils'
import { NewPostForm, Preview } from '../components'

marked.setOptions({ sanitize: true })

export default class NewPostView extends Autobind {

	constructor(props, context) {
		super(props, context)

		var postType = context.router.getCurrentPath().substr(11) === 'article'
			? 'blog'
			: 'vlog'

		this.state = {
			title: '',
			type: postType
		}
	}

	componentWillMount() {
		var updateTitle$ = makeEventStream()
		updateTitle$
			.debounce(400)
			.map(evt => React.findDOMNode(this.refs.postForm.refs.title).value)
			.subscribe(title => this.setState({ title }))

		var updateBody$ = makeEventStream()
		updateBody$
			.debounce(400)
			.map(evt => React.findDOMNode(this.refs.postForm.refs.body).value)
			.map(markdown => marked(markdown))
			.subscribe(body => this.setState({ body }))

		var updateUrl$ = makeEventStream()
		updateUrl$
			.debounce(400)
			.map(evt => React.findDOMNode(this.refs.postForm.refs.url).value)
			.subscribe(url => this.setState({ url }))

		this.handlers = {
			updateTitle$,
			updateBody$,
			updateUrl$
		}
	}

	render() {
		return (
			<div className="new-post">
				<NewPostForm ref="postForm" postType={this.context.router.getCurrentPath().substr(11)} handlers={this.handlers} />
				<Preview post={this.state} />
			</div>
		)
	}
}

NewPostView.contextTypes = {
	router: React.PropTypes.func.isRequired
}