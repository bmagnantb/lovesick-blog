import React from 'react'

import { makeEventStream, Autobind } from '../../utils'
import { Preview } from '../components'

export default class ConfirmPostView extends Autobind {
	constructor() {
		super()

		this._bind('clickedConfirm')
	}

	componentDidMount() {
		var confirmPost = makeEventStream()
		confirmPost.subscribe(() => this.props.actions.submitPost(this.props.data.post))

		this.handlers = {
			confirmPost
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.data.submitted.completed) {
			this.context.router.transitionTo('/admin/panel')
			setTimeout(this.props.actions.clearPost)
		}
	}

	render() {
		var pending = this.props.data.submitted.pending
			? <div className="submit-post-pending">Submitting...</div>
			: null

		return (
			<div>
				{pending}
				<Preview post={this.props.data.post}/>
				<button onClick={this.clickedConfirm}>Confirm Post</button>
			</div>
		)
	}

	clickedConfirm(evt) {
		evt.preventDefault()
		this.handlers.confirmPost(evt)
	}
}

ConfirmPostView.contextTypes = {
	router: React.PropTypes.func.isRequired
}

// ConfirmPostView.willTransitionFrom = function(transition, component) {
// 	if (component.props.data.submitted.completed)
// }