import React from 'react'

import Autobind from '../Autobind'

export default function injectBlogStore(Component, injectedProps) {
	class BlogContainer extends Autobind {
		constructor(props, context) {
			super(props, context)

			this._store = context.alt.getStore('blog')
			this._actions = context.alt.getActions('blog')

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

		_shouldStoreFetch(blogId) {
			if (!this.state.blogCache[blogId]) this._actions.getBlogPost(blogId)
		}
	}

	BlogContainer.contextTypes = {
		alt: React.PropTypes.object.isRequired
	}

	return BlogContainer
}