import React from 'react'
import _ from 'lodash'
import { RouteHandler } from 'react-router'
import AltContainer from 'alt/AltContainer'

export default class PostsContainer {
	constructor(props, context) {
		this._store = context.flux.getStore('posts')
		this._actions = context.flux.getActions('posts')
	}

	componentWillMount() {
		this._shouldStoreFetch(this.props.params.postRoute, this._store.getState())
	}

	componentWillReceiveProps(nextProps) {
		this._shouldStoreFetch(nextProps.params.postRoute, this._store.getState())
	}

	render() {
		return (
			<AltContainer stores={{data: this._store}}>
				<RouteHandler />
			</AltContainer>
		)
	}

	_shouldStoreFetch(postRoute, state) {

		// if no postRoute, get most recent vlog
		if (!postRoute) return this._actions.getMostRecentVlog()

		// check if postRoute is a date, Date.parse will return NaN if not and date will not equal itself
		var date = Date.parse(postRoute)
		if (date === date) {

			// only allow year, month, day
			var dateArray = postRoute.split('-').map(string => Number.parseInt(string))

			// check if already cached
			if (_.isEqual(state.dateSearch.date, dateArray)) return this._actions.setDateSearch(true, dateArray)

			if (!state.dateSearch.is) this._actions.setDateSearch(true, dateArray)
			return this._actions.getPostsByDate(dateArray)
		}

		// must not be a date search
		if (state.dateSearch.is) this._actions.setDateSearch(false)

		// get post by postRoute
		if (_.isEmpty(state.currentPost) || state.currentPost.postRoute !== postRoute) this._actions.getPostByTitle(postRoute)
	}
}

PostsContainer.contextTypes = {
	flux: React.PropTypes.object.isRequired
}
