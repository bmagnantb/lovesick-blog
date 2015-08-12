import React from 'react'
import AltContainer from 'alt/AltContainer'

export default function (Component, injectedProps) {
	class NewPostContainer {
		constructor(props, context) {
			this._store = context.flux.getStore('new-post')
			this._actions = context.flux.getActions('new-post')
		}

		componentWillMount() {
			this._actions.setType(this.context.router.getCurrentPath().substr(11))
		}

		render() {
			return (
				<AltContainer stores={{data: this._store}} actions={{actions: this._actions}}>
					<Component {...injectedProps} />
				</AltContainer>
			)
		}
	}

	NewPostContainer.contextTypes = {
		flux: React.PropTypes.object.isRequired,
		router: React.PropTypes.func.isRequired
	}

	return NewPostContainer
}