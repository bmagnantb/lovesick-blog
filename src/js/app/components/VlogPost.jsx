import React from 'react'

export default class VlogPost {
	render() {
		return (
			<div className="vlog-post">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/2vjPBrBU-TM" frameBorder="0" allowFullScreen></iframe>
				<h2>[ Title of Vlog ]</h2>
				<p>Here are a few sentences I wrote about this video, you know.</p>
			</div>
		)
	}
}

// <h2>My Vlog Post #{this.props.post.id}</h2>
// <p>This is an embedded youtube player linked to {this.props.post.youtube_url}</p>