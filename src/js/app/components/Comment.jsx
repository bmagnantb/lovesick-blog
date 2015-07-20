import React from 'react'

export default class Comment {
	render() {
		return (
			<div>
				<h3>{this.props.user}</h3>
				<p>{this.props.body}</p>
			</div>
		)
	}
}