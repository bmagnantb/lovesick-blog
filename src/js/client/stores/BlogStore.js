var name = 'blog'

var store = class BlogStore {
	constructor() {
		this.blogCache = {}
		this.currentBlog = {}

		this.bindListeners({
			getBlogPost: this.alt.getActions('blog').getBlogPost
		})
	}

	getBlogPost(newPost) {
		this.blogCache[newPost.id] = newPost
		this.currentBlog = newPost
	}
}

export default { name, store }