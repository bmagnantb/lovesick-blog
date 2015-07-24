import React from 'react'

export default class NewVideo extends React.Component {
	render() {
		return (
			<form>
				<input type="text" name="title" placeholder="title" />
				<input type="text" name="url" placeholder="url" />
				<textarea name="blurb" placeholder="blurb" />
			</form>
		)
	}
}