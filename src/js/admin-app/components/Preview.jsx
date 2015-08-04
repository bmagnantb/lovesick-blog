import React from 'react'

import { BlogPost, VlogPost } from '../../app/components'

export default class Preview {

	render() {
		return this.props.post.type === 'blog'
			? <BlogPost post={this.props.post} />
			: <VlogPost post={this.props.post} />
	}
}

		// var video = this.props.post.url
		// 	? this.props.post.url
		// 	: null

		// return (
		// 	<div>
		// 		<h3>{ this.props.post.title }</h3>
		// 		{video}
		// 		<div dangerouslySetInnerHTML={ {__html: this.props.post.body} } />
		// 	</div>
		// )