import Alt from 'alt'

export default class AltApp extends Alt {
	constructor(actions, stores, config = {}) {
		super(config)

		actions.forEach((val) => {
			this.addActions(val.name, val.actions)
		})

		stores.forEach((val) => {
			this.addStore(val.name, val.store)
		})

		this.asyncActions = []
	}
}