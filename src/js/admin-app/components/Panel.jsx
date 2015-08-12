import React from 'react'
import { Link } from 'react-router'

export default class Panel {
	render() {
		return (
			<div>
				<Link to="/admin/new-vlog">New Video</Link>
				<Link to="/admin/new-blog">New Article</Link>
			</div>
		)
	}
}