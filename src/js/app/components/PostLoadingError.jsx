import React from 'react'

import './PostLoadingError.scss'

export default class PostLoadingError {
	render() {
		return (
			<div className="post-loading-error">
				<h3>
					Error - <span onClick={this.props.reload}>Reload</span>
				</h3>
			</div>
		)
	}
}