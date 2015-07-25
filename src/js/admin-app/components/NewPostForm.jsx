import React from 'react'
import { Link } from 'react-router'

export default class NewPostForm {

	render() {
		return this.props.postType === 'article'
			? (
				<form onSubmit={evt => evt.preventDefault()}>
					<input type="text" name="title" placeholder="title" ref="title" onChange={this.props.handlers.updateTitle$} />
					<textarea name="body" placeholder="body" ref="body" onChange={this.props.handlers.updateBody$} />
					<button>Preview & Submit</button>
				</form>
			)
			: (
				<form>
					<input type="text" name="title" placeholder="title" ref="title" onChange={this.props.handlers.updateTitle$} />
					<input type="text" name="url" placeholder="url" ref="url" onChange={this.props.handlers.updateUrl$} />
					<textarea name="body" placeholder="body" ref="body" onChange={this.props.handlers.updateBody$} />
					<button>Preview & Submit</button>
				</form>
			)
	}
}