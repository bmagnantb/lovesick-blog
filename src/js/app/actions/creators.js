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


/* ----- GET POSTS BY TITLE ----- */

export function getPostByTitle(title) {
	return dispatch => {
		dispatch(requestPostByTitle())

		return api.getPostByTitle(title)
			.then(throwRequestError)
			.then(resp => dispatch(receivePostByTitle(resp.body)))
			.catch(resp => dispatch(failPostByTitle()))
	}
}

function requestPostByTitle() {
	return {
		type: types.POST_BY_TITLE_REQUEST
	}
}

function receivePostByTitle(post) {
	return {
		type: types.POST_BY_TITLE_SUCCESS,
		payload: post
	}
}

function failPostByTitle() {
	return {
		type: types.POST_BY_TITLE_FAIL
	}
}


/* ----- GET POSTS BY DATE ----- */

export function getPostsByDate(date) {
	return dispatch => {
		dispatch(requestPostsByDate())

		return api.getPostsByDate(date)
			.then(throwRequestError)
			.then(resp => dispatch(receivePostsByDate(resp.body)))
			.catch(resp => dispatch(failPostsByDate()))
	}
}

function requestPostsByDate() {
	return {
		type: types.POSTS_BY_DATE_REQUEST
	}
}

function receivePostsByDate(posts) {
	return {
		type: types.POSTS_BY_DATE_SUCCESS,
		payload: posts
	}
}

function failPostsByDate() {
	return {
		type: types.POSTS_BY_DATE_FAIL
	}
}