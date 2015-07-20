import { getPost } from '../api'

var name = 'posts'

var actions = class PostsActions {
	getPost(postId) {
		var request = getPost(postId)
		request.then((data) => {
			this.dispatch(data)
		})
		this.alt.asyncActions.push(request)
	}
}

export default { name, actions }