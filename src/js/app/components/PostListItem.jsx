import React from 'react'
import { Link } from 'react-router'

export default class PostListItem {
	render() {
		var date = new Date(this.props.post.timestamp)
		return (
			<div>
				<h3>
					<Link to="post" params={{title: this.props.post.title}}>
						{this.props.post.title.replace(/-/g, ' ')}
					</Link>
				</h3>
				<h5>{date.toUTCString()}</h5>
			</div>
		)
	}
}