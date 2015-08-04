var name = 'posts'

var store = class PostsStore {
	constructor() {
		this.postCache = {}
		this.currentPost = {}
		this.dateSearch = {
			is: false,
			date: [],
			results: []
		}

		var actions = this.alt.getActions('posts')

		this.bindListeners({
			getMostRecentVlog: actions.getMostRecentVlog,
			getPostByTitle: actions.getPostByTitle,
			getPostsByDate: actions.getPostsByDate,
			setDateSearch: actions.setDateSearch
		})
	}

	getMostRecentVlog(post) {
		this.currentPost = post
	}

	getPostByTitle(post) {
		this.currentPost = post
	}

	getPostsByDate(posts) {
		this.dateSearch.results = posts
	}

	setDateSearch({ is, date }) {
		var returnValue

		if (this.dateSearch.is !== is) {
			returnValue = is === true ? false : true
			this.dateSearch.is = is
		}

		else if (this.dateSearch.date === date) {
			returnValue = true
		}

		else {
			var returnValue = false
			this.dateSearch.is = is
			returnValue = false
		}

		if (date) this.dateSearch.date = date

		return returnValue
	}
}

export default { name, store }