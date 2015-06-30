import React from 'react'

import Autobind from '../components/Autobind'

export default class PodcastEpisodeView extends Autobind {
	constructor(props, context) {
		super(props, context)
		this._bind('_submitComment')
	}

	render() {
		return (
			<main>
				<h2>My Podcast Episode #{this.props.storeData.currentPodcast.id}</h2>
				<p>This is the media player, I promise</p>
				<form onSubmit={this._submitComment}>
					<h5>Comment on purity, both audio and subject</h5>
					<textarea />
					<button>Submit</button>
				</form>
			</main>
		)
	}

	_submitComment(evt) {
		evt.preventDefault()
		// post action + optimistic post
		console.log('posting comment')
	}
}

PodcastEpisodeView.contextTypes = {
	router: React.PropTypes.func.isRequired
}