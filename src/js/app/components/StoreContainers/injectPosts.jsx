import React from 'react'

import { Autobind } from '../../../react-utils'

export default function injectPosts(Component, injectedProps) {
	class PostsContainer extends Autobind {
		constructor(props, context) {
			super(props, context)

			this._store = context.alt.getStore('posts')
			this._actions = context.alt.getActions('posts')

			this.state = this._store.getState()
		}

		componentWillMount() {
			this._shouldStoreFetch(this.props.params.id)
			this.setState(this._store.getState())
		}

		componentWillReceiveProps(nextProps) {
			this._shouldStoreFetch(nextProps.params.id)
		}

		render() {
			return <Component {...injectedProps} storeData={this.state} />
		}

		_shouldStoreFetch(postId) {
			if (!this.state.postCache[postId]) this._actions.getPost(postId)
		}
	}

	PostsContainer.contextTypes = {
		alt: React.PropTypes.object.isRequired
	}

	return PostsContainer
}