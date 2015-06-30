var name = 'podcast'

var store = class PodcastStore {
	constructor() {
		this.podcastCache = {}
		this.currentPodcast = {}

		this.bindListeners({
			addPodcast: this.alt.getActions('podcast').getPodcast
		})
	}

	addPodcast(podcast) {
		this.podcastCache[podcast.id] = podcast
		this.currentPodcast = podcast
	}
}

export default { name, store }