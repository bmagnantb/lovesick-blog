import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import { getPostsByDate } from '../actions'
import { PostLoadingError } from '../components'

import './DateSearchView.scss'

class DateSearchView {
	componentWillMount() {
		this.getPostsByDate(this.props.params.date, this.props.dispatch)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.params.date === this.props.params.date) return
		this.getPostsByDate(nextProps.params.date, nextProps.dispatch)
	}

	getPostsByDate(dateString, dispatch) {
		dispatch(getPostsByDate(dateString.split('-')))
	}

	render() {
		var posts
		if (this.props.error)
			posts = <PostLoadingError reload={this.reloadSearch.bind(this)} />
		else if (this.props.requesting)
			posts = <div>Loading</div>
		else if (_.isEmpty(this.props.posts))
			posts = <h3>No posts found</h3>
		else
			posts = <ul>{this.props.posts.map(makeDateSearchList)}</ul>

		return (
			<div className="date-search-view">
				<main>
					{posts}
				</main>
			</div>
		)
	}

	reloadSearch() {
		this.getPostsByDate(this.props.params.date, this.props.dispatch)
	}
}

function makeDateSearchList(post) {
	var { title, date } = post
	return (
		<li>
			<h3>{post.title}</h3>
			<h4>{`${date.month + 1} - ${date.day} - ${date.year}`}</h4>
		</li>
	)
}


/* ----- redux select & connect -----*/

function select(state, props) {
	var { cache, requesting, error } = state.posts
	return {
		posts: filterCacheToArray(cache, makeFilter(props.params.date)),
		requesting,
		error
	}
}

function filterCacheToArray(cache, filter) {
	var cacheArray = []
	for (var key in cache) {
		if (filter(cache[key])) cacheArray.push(cache[key])
	}
	return cacheArray
}

function makeFilter(dateString) {
	var dateArray = dateString.split('-').map(num => Number.parseInt(num))
	var dateObj = { year: dateArray[0] }
	if (dateArray.length > 1) dateObj.month = dateArray[1] - 1
	if (dateArray.length > 2) dateObj.day = dateArray[2]

	return (post) => {
		for (var key in dateObj) {
			if (post.date[key] !== dateObj[key]) return false
		}
		return true
	}
}

export default connect(select)(DateSearchView)
