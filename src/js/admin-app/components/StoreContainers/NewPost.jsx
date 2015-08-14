import React from 'react'
import { RouteHandler } from 'react-router'
import AltContainer from 'alt/AltContainer'

export default class NewPostContainer {
	constructor(props, context) {
		this._store = context.flux.getStore('new-post')
		this._actions = context.flux.getActions('new-post')
	}

	componentWillMount() {
		this._actions.setType(this.context.router.getCurrentPath().substr(16))
	}

	render() {
		return (
			<AltContainer stores={{data: this._store}} actions={{actions: this._actions}}>
				<RouteHandler />
			</AltContainer>
		)
	}
}

NewPostContainer.contextTypes = {
	flux: React.PropTypes.object.isRequired,
	router: React.PropTypes.func.isRequired
}
