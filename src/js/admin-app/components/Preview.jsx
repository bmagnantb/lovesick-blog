import React from 'react'

import { BlogPost, VlogPost } from '../../app/components'

export default class Preview {

	render() {
		return this.props.post.type === 'blog'
			? <BlogPost post={this.props.post} />
			: <VlogPost post={this.props.post} />
	}
}