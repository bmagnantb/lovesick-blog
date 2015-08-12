import _ from 'lodash'

var name = 'new-post'

var store = class NewPostStore {
	constructor() {
		var actions = this.alt.getActions('new-post')

		this.post = {
			title: '',
			body: '',
			url: '',
			type: '',
			submitted: false
		}

		this.bindListeners({
			updatePost: actions.updatePost,
			setType: actions.setType,
			submit: actions.submit
		})
	}

	updatePost(post) {
		this.post = _.assign(this.post, post)
	}

	setType(type) {
		this.post.type = type
	}

	submit() {
		this.post.submitted = true
	}
}

export default { name, store }