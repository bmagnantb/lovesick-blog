import React from 'react'
import { Link } from 'react-router'

export default class Panel {
	render() {
		return (
			<div>
				<Link to="/admin/new-video">New Video</Link>
				<Link to="/admin/new-article">New Article</Link>
			</div>
		)
	}
}