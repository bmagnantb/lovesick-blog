import React from 'react'
import _ from 'lodash'

import { VlogPost, Sidebar } from '../components'

export default class HomeView {
	render() {
		if (_.isEmpty(this.props.data.currentPost)) return <div className="post-view"></div>

		return (
			<div className="home-view">
				<main className="home">
					<VlogPost post={this.props.data.currentPost} />
				</main>
				<Sidebar />
			</div>
		)
	}
}