import React from 'react'
import _ from 'lodash'

import { Autobind } from '../../react-utils'
import { BlogPost, DateSearch, Sidebar, VlogPost } from '../components'

export default class PostView extends Autobind {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		if (_.isEmpty(this.props.storeData.currentPost) && !this.props.storeData.dateSearch.is) return <div className="post-view"></div>

		var PostComponent
		if (this.props.storeData.currentPost.type === 'blog') PostComponent = <BlogPost post={this.props.storeData.currentPost} />
		else if (this.props.storeData.currentPost.type === 'vlog') PostComponent = <VlogPost post={this.props.storeData.currentPost} />
		else if (this.props.storeData.dateSearch.is) PostComponent = <DateSearch results={this.props.storeData.dateSearch.results} />

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

PostView.contextTypes = {
	router: React.PropTypes.func.isRequired
}