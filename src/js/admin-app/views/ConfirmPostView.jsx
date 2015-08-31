import React from 'react'
import { connect } from 'react-redux'

import { makeEventStream, Autobind } from '../../utils'
import { submitPost } from '../actions'
import { BlogPost, VlogPost } from '../../app/components'

class ConfirmPostView extends Autobind {
	constructor() {
		super()
		this._bind('clickedSubmit')
	}

	render() {
		var pending = this.props.post.submitted.pending
			? <div className="submit-post-pending">Submitting...</div>
			: null

		var preview = this.props.post.type === 'vlog'
			? <VlogPost post={this.props.post} />
			: <BlogPost post={this.props.post} />

		return (
			<div>
				{pending}
				{preview}
				<button onClick={this.clickedSubmit}>Submit Post</button>
			</div>
		)
	}

	clickedSubmit(evt) {
		evt.preventDefault()
		this.props.dispatch(submitPost(this.props.post, this.context.router.transitionTo))
	}
}

ConfirmPostView.contextTypes = {
	router: React.PropTypes.func.isRequired
}

export default connect(select)(ConfirmPostView)

function select(state, props) {
	return {
		post: state.newPost
	}
}
