import { submitPost } from '../api'

var name = 'new-post'

var actions = class NewPostActions {
	constructor() {
		this.generateActions('updatePost', 'setType', 'submitPending', 'clearPost')
	}

	submitPost(post) {
		this.actions.submitPending()

		submitPost(post).then(msg => {
			this.dispatch(msg.error)
		})
	}
}

export default { name, actions }