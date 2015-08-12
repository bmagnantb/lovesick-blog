var name = 'new-post'

var actions = class NewPostActions {
	constructor() {
		this.generateActions('updatePost', 'setType')
	}

	submit() {
		this.dispatch()
	}
}

export default { name, actions }