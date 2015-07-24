import React from 'react'

export default class NewArticle {
	render() {
		return (
			<form>
				<input type="text" name="title" placeholder="title" />
				<textarea name="body" placeholder="body" />
			</form>
		)
	}
}