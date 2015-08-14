import _ from 'lodash'

var name = 'new-post'

var store = class NewPostStore {
	constructor() {
		var actions = this.alt.getActions('new-post')

		this.post = {
			title: '',
			body: '',
			url: '',
			type: ''
		}

		this.submitted = {
			pending: false,
			completed: false
		}

		this.bindListeners({
			updatePost: actions.updatePost,
			setType: actions.setType,
			submitPost: actions.submitPost,
			submitPending: actions.submitPending,
			clearPost: actions.clearPost
		})
	}

	updatePost(post) {
		this.post = _.assign(this.post, post)
	}

	setType(type) {
		this.post.type = type
	}

	submitPost(msg) {
		this.submitted.pending = false
		this.submitted.completed = true
	}

	submitPending() {
		this.submitted.pending = true
	}

	clearPost() {
		this.post = {
			title: '',
			body: '',
			url: '',
			type: ''
		}
		this.submitted.completed = false
	}
}

export default { name, store }