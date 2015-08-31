import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import { getMostRecentVlog } from '../actions'
import { VlogPost, PostLoadingError, Sidebar } from '../components'

require('./HomeView.scss')

class HomeView {
	componentWillMount() {
		if (_.isEmpty(this.props.post)) this.props.dispatch(getMostRecentVlog())
	}

	render() {
		var PostComponent
		if (this.props.error)
			PostComponent = <PostLoadingError reload={this.reloadPost.bind(this)} />
		else if (this.props.requesting || _.isEmpty(this.props.post))
			PostComponent = <div>Loading</div>
		else
			PostComponent = <VlogPost post={this.props.post} />

		return (
			<div className="home-view">
				<main className="home">
					{PostComponent}
				</main>
				<Sidebar />
			</div>
		)
	}

	reloadPost() {
		this.props.dispatch(getMostRecentVlog())
	}
}

export default connect(select)(HomeView)

function select(state, props) {
	var { cache, requesting, error, mostRecentRoute } = state.posts
	return {
		post: cache[mostRecentRoute],
		requesting,
		error
	}
}