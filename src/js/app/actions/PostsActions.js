import { getMostRecentVlog, getPostByTitle, getPostsByDate } from '../api'

var name = 'posts'

var actions = class PostsActions {

	getMostRecentVlog() {
		var request = getMostRecentVlog()
		request.then(({body}) => this.dispatch(body))
		this.alt.asyncActions.push(request)
	}

	getPostByTitle(title) {
		var request = getPostByTitle(title)
		request.then(({body}) => this.dispatch(body))
		this.alt.asyncActions.push(request)
	}

	getPostsByDate(dateArray) {
		var request = getPostsByDate(dateArray)
		request.then(({body}) => this.dispatch(body))
		this.alt.asyncActions.push(request)
	}

	setDateSearch(is, date) {
		this.dispatch({is, date})
	}
}

export default { name, actions }