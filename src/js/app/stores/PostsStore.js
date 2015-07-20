var name = 'posts'

var store = class PostsStore {
	constructor() {
		this.postCache = {}
		this.currentPost = {}

		this.bindListeners({
			getPost: this.alt.getActions('posts').getPost
		})
	}

	getPost(newPost) {
		this.currentPost = newPost
	}
}

export default { name, store }