import React from 'react'

import PostListItem from './PostListItem'

export default class DateSearch {
	render() {
		return (
			<div>
				{this.props.results
					.sort((p1, p2) => p2.timestamp - p1.timestamp)
					.map(post => <PostListItem post={post} key={`post-${post.timestamp}`} />)}
			</div>
		)
	}
}