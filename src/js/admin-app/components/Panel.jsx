import React from 'react'
import { Link } from 'react-router'

import Autobind from './Autobind'

export default class Panel extends Autobind {
	render() {
		return (
			<div>
				<Link to="/admin/new-video">New Video</Link>
				<Link to="/admin/new-article">New Article</Link>
			</div>
		)
	}
}