import { getBlogPost } from '../api'

var name = 'blog'

var actions = class BlogActions {
	getBlogPost(postId) {
		var request = getBlogPost(postId)
		request.then((data) => {
			this.dispatch(data)
		})
		this.alt.asyncActions.push(request)
	}
}

export default { name, actions }