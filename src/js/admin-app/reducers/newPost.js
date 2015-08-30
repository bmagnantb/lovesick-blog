import {
	SET_POST_TYPE
} from '../actions/types'

var initial = {
	type: null
}

export default function(state = initial, {type, payload}) {
	switch (type) {

		case SET_POST_TYPE:
			return {...state, type: payload}

		default:
			return state
	}
}