import React from 'react'
import { Link } from 'react-router'

require('./Panel.scss')

export default class Panel {
	render() {
		return (
			<div className="panel">
				<Link to="/admin/new-post">New Post</Link>
			</div>
		)
	}
}