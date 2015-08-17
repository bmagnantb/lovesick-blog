import React from 'react'
import { Link } from 'react-router'

require('./Panel.scss')

export default class Panel {
	render() {
		return (
			<div className="panel">
				<Link to="/admin/new-post/vlog">New Video</Link>
				<Link to="/admin/new-post/blog">New Article</Link>
			</div>
		)
	}
}