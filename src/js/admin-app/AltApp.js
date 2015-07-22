import Alt from 'alt'

import actions from './actions'
import stores from './stores'

export default class AltApp extends Alt {
	constructor(config = {}) {
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

