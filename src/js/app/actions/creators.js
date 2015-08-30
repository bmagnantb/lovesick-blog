import api from '../api'
import { throwRequestError } from '../../utils'
import types from './types'

/* ----- GET MOST RECENT VLOG ----- */

export function getMostRecentVlog() {
	return dispatch => {
		dispatch(requestMostRecentVlog())

		return api.getMostRecentVlog()
			.then(throwRequestError)
			.then(resp => dispatch(receiveMostRecentVlog(resp.body)))
			.catch(resp => dispatch(failMostRecentVlog()))
	}
}

function requestMostRecentVlog() {
	return {
		type: types.RECENT_VLOG_REQUEST
	}
}

function receiveMostRecentVlog(vlog) {
	return {
		type: types.RECENT_VLOG_SUCCESS,
		payload: vlog
	}
}

function failMostRecentVlog() {
	return {
		type: types.RECENT_VLOG_FAIL
	}
}
