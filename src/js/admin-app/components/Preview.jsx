import React from 'react'

export default class Preview {

	render() {
		var video = this.props.post.url
			? this.props.post.url
			: null

		return (
			<div>
				<h3>{ this.props.post.title }</h3>
				{video}
				<div dangerouslySetInnerHTML={ {__html: this.props.post.body} } />
			</div>
		)
	}
}