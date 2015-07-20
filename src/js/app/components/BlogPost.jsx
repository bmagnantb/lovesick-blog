import React from 'react'

export default class BlogPost {
	render() {
		return (
			<div className="blog-post">
				<h2>My Blog Post #{this.props.post.id}</h2>
				<p>{this.props.post.body}</p>
			</div>
		)
	}
}