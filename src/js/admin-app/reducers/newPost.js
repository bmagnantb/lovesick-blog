import { SET_POST_TYPE, UPDATE_POST } from '../actions/types'

var initial = {
	type: null
}

export default function(state = initial, {type, payload}) {
	switch (type) {

		case SET_POST_TYPE:
			return {...state, type: payload}

		case UPDATE_POST:
			return {...state, ...payload}

		default:
			return state
	}
}