import React from 'react'
import _ from 'lodash'

import { Autobind } from '../../../utils'

export default function injectPosts(Component, injectedProps) {
	class PostsContainer extends Autobind {
		constructor(props, context) {
			super(props, context)

			this._store = context.flux.getStore('posts')
			this._actions = context.flux.getActions('posts')

			this.state = this._store.getState()

			this._bind('_onStoreChange')
		}

		componentWillMount() {
			this._shouldStoreFetch(this.props.params.title)
		}

		componentDidMount() {
			this._store.listen(this._onStoreChange)
		}

		componentWillUnmount() {
			this._store.unlisten(this._onStoreChange)
		}

		componentWillReceiveProps(nextProps) {
			this._shouldStoreFetch(nextProps.params.title)
		}

		render() {
			return <Component {...injectedProps} storeData={this.state} />
		}

		_shouldStoreFetch(title) {

			// if no title, get most recent vlog
			if (!title) return this._actions.getMostRecentVlog()

			// check if title is a date, Date.parse will return NaN if not and date will not equal itself
			var date = Date.parse(title)
			if (date === date) {

				// only allow year, month, day
				var dateArray = title.split('-').map(string => Number.parseInt(string))

				// check if already cached
				if (_.isEqual(this.state.dateSearch.date, dateArray)) return this._actions.setDateSearch(true, dateArray)

				if (!this.state.dateSearch.is) this._actions.setDateSearch(true, dateArray)
				return this._actions.getPostsByDate(dateArray)
			}

			// must not be a date search
			if (this.state.dateSearch.is) this._actions.setDateSearch(false)

			// get post by title
			if (_.isEmpty(this.state.currentPost) || this.state.currentPost.title !== title) this._actions.getPostByTitle(title)
		}

		_onStoreChange() {
			this.setState(this._store.getState())
		}
	}

	PostsContainer.contextTypes = {
		flux: React.PropTypes.object.isRequired
	}

	return PostsContainer
}