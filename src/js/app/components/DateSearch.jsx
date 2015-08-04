import React from 'react'

import PostListItem from './PostListItem'

export default class DateSearch {
	render() {
		return (
			<div>
				{this.props.results.map(post => <PostListItem post={post} key={`post-${post.timestamp}`} />)}
			</div>
		)
	}
}