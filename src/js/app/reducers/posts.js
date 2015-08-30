import {
	RECENT_VLOG_REQUEST, RECENT_VLOG_SUCCESS, RECENT_VLOG_FAIL,
	POST_BY_TITLE_REQUEST, POST_BY_TITLE_SUCCESS, POST_BY_TITLE_FAIL
} from '../actions/types'

var initial = {
	cache: {},
	mostRecentRoute: null,
	requesting: false,
	error: false
}

export default (state = initial, { type, payload }) => {
	switch (type) {

/* ------------ REQUEST INITIATED ------------- */

		case RECENT_VLOG_REQUEST:
			return {...state, requesting: true, error: false, mostRecentRoute: null}

		case POST_BY_TITLE_REQUEST:
			return {...state, requesting: true, error: false}

/* ----------- FAILED REQUEST -------------- */

		case RECENT_VLOG_FAIL:
		case POST_BY_TITLE_FAIL:
			return {...state, requesting: false, error: true}

/* ---------- REQUEST SUCCESSES -------------- */

		case RECENT_VLOG_SUCCESS:
			return {
				...state,
				cache: {...state.cache, [payload.route]: payload},
				mostRecentRoute: payload.route,
				requesting: false
			}

		case POST_BY_TITLE_SUCCESS:
			return {
				...state,
				cache: {...state.cache, [payload.route]: payload},
				requesting: false
			}

/* -------------- DEFAULT ----------- */

		default:
			return state
	}
}