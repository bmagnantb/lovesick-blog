import React from 'react'

import { Autobind } from '../../react-utils'
import { BlogPost, Comment, Sidebar, VlogPost } from '../components'

export default class PostView extends Autobind {
	constructor(props, context) {
		super(props, context)
		this._bind('_submitComment')
	}

	render() {
		console.log(this.props.storeData.currentPost)
		var PostComponent = this.props.storeData.currentPost.type === 'blog'
			? BlogPost
			: VlogPost

		return (
			<div className="post-view">
				<main>
					<PostComponent post={this.props.storeData.currentPost} />
				</main>
				<Sidebar />
			</div>
		)
	}

	_submitComment(evt) {
		evt.preventDefault()
		// action to post comment + optimistic post
		console.log('posting comment')
	}
}

PostView.contextTypes = {
	router: React.PropTypes.func.isRequired
}