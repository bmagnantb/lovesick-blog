import React from 'react'

require('./VlogPost.scss')

export default class VlogPost {
	render() {
		return (
			<div className="vlog-post">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/2vjPBrBU-TM" frameBorder="0" allowFullScreen></iframe>
				<h2>{this.props.post.title}</h2>
				<h5>{this.props.post.url}</h5>
				<div dangerouslySetInnerHTML={{__html: this.props.post.body}} />
			</div>
		)
	}
}