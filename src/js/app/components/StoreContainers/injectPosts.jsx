import React from 'react'
import _ from 'lodash'
import AltContainer from 'alt/AltContainer'

export default function injectPosts(Component) {
	class PostsContainer {
		constructor(props, context) {
			this._store = context.flux.getStore('posts')
			this._actions = context.flux.getActions('posts')
		}

		componentWillMount() {
			this._shouldStoreFetch(this.props.params.title, this._store.getState())
		}

		componentWillReceiveProps(nextProps) {
			this._shouldStoreFetch(nextProps.params.title, this._store.getState())
		}

		render() {
			return (
				<AltContainer stores={{data: this._store}}>
					{Component}
				</AltContainer>
			)
		}

		_shouldStoreFetch(title, state) {

			// if no title, get most recent vlog
			if (!title) return this._actions.getMostRecentVlog()

			// check if title is a date, Date.parse will return NaN if not and date will not equal itself
			var date = Date.parse(title)
			if (date === date) {

				// only allow year, month, day
				var dateArray = title.split('-').map(string => Number.parseInt(string))

				// check if already cached
				if (_.isEqual(state.dateSearch.date, dateArray)) return this._actions.setDateSearch(true, dateArray)

				if (!state.dateSearch.is) this._actions.setDateSearch(true, dateArray)
				return this._actions.getPostsByDate(dateArray)
			}

			// must not be a date search
			if (state.dateSearch.is) this._actions.setDateSearch(false)

			// get post by title
			if (_.isEmpty(state.currentPost) || state.currentPost.title !== title) this._actions.getPostByTitle(title)
		}
	}

	PostsContainer.contextTypes = {
		flux: React.PropTypes.object.isRequired
	}

	return PostsContainer
}