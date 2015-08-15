import React from 'react'

export default class BlogPost {
	render() {
		return (
			<div className="blog-post">
				<h2>{this.props.post.title}</h2>
				<div dangerouslySetInnerHTML={{__html: this.props.post.body}} />
			</div>
		)
	}
}