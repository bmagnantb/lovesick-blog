import React from 'react'

import Autobind from '../Autobind'

export default function injectPodcastStore(Component, injectedProps) {
	class PodcastContainer extends Autobind {
		constructor(props, context) {
			super(props, context)

			console.log('alt context', context.alt)

			this._store = context.alt.getStore('podcast')
			this._actions = context.alt.getActions('podcast')

			this.state = this._store.getState()
		}

		componentWillMount() {
			this._shouldStoreFetch(this.props.params.id)
			this.setState(this._store.getState())
		}

		componentWillReceiveProps(nextProps) {
			this._shouldStoreFetch(this.props.params.id)
		}

		render() {
			return <Component {...injectedProps} storeData={this.state} />
		}

		_shouldStoreFetch(podcastId) {
			if (!this.state.podcastCache[podcastId]) this._actions.getPodcast(podcastId)
		}
	}

	PodcastContainer.contextTypes = {
		alt: React.PropTypes.object.isRequired
	}

	return PodcastContainer
}