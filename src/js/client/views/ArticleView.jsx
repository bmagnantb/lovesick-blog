import React from 'react'

import Autobind from '../components/Autobind'

export default class ArticleView extends Autobind {
	constructor(props, context) {
		super(props, context)
		this._bind('_submitComment')
	}

	render() {
		console.log(this.props.storeData)
		return (
			<main>
				<h2>My Blog Post #{this.props.storeData.currentBlog.id}</h2>
				<p>It's so good, right? I'm a writer.</p>
				<form onSubmit={this._submitComment}>
					<h5>Comment on how good</h5>
					<textarea />
					<button>Submit</button>
				</form>
			</main>
		)
	}

	_submitComment(evt) {
		evt.preventDefault()
		// action to post comment + optimistic post
		console.log('posting comment')
	}
}

ArticleView.contextTypes = {
	router: React.PropTypes.func.isRequired
}