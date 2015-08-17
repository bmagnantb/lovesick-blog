import React from 'react'
import _ from 'lodash'

import { BlogPost, DateSearch, Sidebar, VlogPost } from '../components'

require('./PostView.scss')

export default class PostView {

	render() {
		if (_.isEmpty(this.props.data.currentPost) && !this.props.data.dateSearch.is) return <div className="post-view"></div>

		var PostComponent
		if (this.props.data.dateSearch.is) PostComponent = <DateSearch results={this.props.data.dateSearch.results} />
		else if (this.props.data.currentPost.type === 'blog') PostComponent = <BlogPost post={this.props.data.currentPost} />
		else if (this.props.data.currentPost.type === 'vlog') PostComponent = <VlogPost post={this.props.data.currentPost} />

		return (
			<div className="post-view">
				<main>
					{PostComponent}
				</main>
				<Sidebar />
			</div>
		)
	}
}
