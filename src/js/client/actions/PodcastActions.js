import { getPodcast } from '../api'

var name = 'podcast'

var actions = class PodcastActions {
	getPodcast(podcastId) {
		var request = getPodcast(podcastId)
		request.then((data) => {
			this.dispatch(data)
		})
		this.alt.asyncActions.push(request)
	}
}

export default { name, actions }