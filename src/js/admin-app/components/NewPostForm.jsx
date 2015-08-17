import React from 'react'
import { Link } from 'react-router'

import { makeEventStream } from '../../utils'

require('./NewPostForm.scss')

export default class NewPostForm {

	constructor() {
		this.onBodyChange = this.onBodyChange.bind(this)
		this.handlers = {}
	}

	componentDidMount() {
		var bodyHeight$ = makeEventStream()
		var bodyHeightEvent$ = bodyHeight$
			.throttleFirst(75)
			.map(evt => evt.target)
			.startWith(React.findDOMNode(this.refs.body))

		bodyHeightEvent$
			.filter(body => body.clientHeight < body.scrollHeight)
			.subscribe(body => body.style.height = body.scrollHeight + 'px')

		bodyHeightEvent$
			.filter(body => !(body.clientHeight < body.scrollHeight))
			.subscribe(body => {
				body.style.height = 'auto'
				body.style.height = body.scrollHeight + 'px'
			})

		this.handlers.bodyHeight$ = bodyHeight$
	}

	render() {
		var url = this.props.postType === 'vlog'
			? <input type="text" name="url" placeholder="url" ref="url" onChange={this.props.handlers.updateUrl$} />
			: null

		return (
			<form className="new-post-form" onSubmit={evt => evt.preventDefault()}>
				<input type="text" name="title" placeholder="title" ref="title" onChange={this.props.handlers.updateTitle$} autofocus />
				{url}
				<textarea name="body" placeholder="body" ref="body" onChange={this.onBodyChange} />
				<Link to="/admin/new-post/confirm"><button>Preview & Submit</button></Link>
			</form>
			)
	}

	onBodyChange(evt) {
		this.props.handlers.updateBody$(evt)
		this.handlers.bodyHeight$(evt)
	}
}