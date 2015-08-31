import {
	SET_POST_TYPE, UPDATE_POST, CLEAR_POST,
	SUBMIT_POST_REQUEST, SUBMIT_POST_SUCCESS, SUBMIT_POST_FAIL
} from '../actions/types'

var initial = {
	type: 'vlog',
	title: null,
	url: null,
	body: null,
	submitted: {
		pending: false,
		completed: false,
		error: false
	}
}

export default function(state = initial, {type, payload}) {
	switch (type) {

		case SET_POST_TYPE:
			return {...state, type: payload}

		case UPDATE_POST:
			return {...state, ...payload}

		case CLEAR_POST:
			return initial

		case SUBMIT_POST_REQUEST:
			return {...state, submitted: { pending: true, completed: false, error: false }}

		case SUBMIT_POST_SUCCESS:
			return {...state, submitted: { pending: false, completed: true, error: false }}

		case SUBMIT_POST_FAIL:
			return {...state, submitted: { pending: false, completed: false, error: true }}

		default:
			return state
	}
}