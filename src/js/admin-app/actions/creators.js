import { throwRequestError } from '../../utils'

import api from '../api'
import types from './types'

export function setPostType(postType) {
	return {
		type: types.SET_POST_TYPE,
		payload: postType
	}
}

export function updatePost(update) {
	return {
		type: types.UPDATE_POST,
		payload: update
	}
}

export function clearPost() {
	return {
		type: types.CLEAR_POST
	}
}

export function submitPost(post, transitionTo) {
	var { title, body, url, type } = post
	return (dispatch) => {
		dispatch(submitPostRequest())

		return api.submitPost({ type, title, body, url })
			.then(throwRequestError)
			.then(() => {
				dispatch(submitPostSuccess())
				transitionTo('/admin')
				dispatch(clearPost())
			})
			.catch((err) => dispatch(submitPostFail(err)))
	}
}

function submitPostRequest(post) {
	return {
		type: types.SUBMIT_POST_REQUEST
	}
}

function submitPostSuccess() {
	return {
		type: types.SUBMIT_POST_SUCCESS
	}
}

function submitPostFail(err) {
	console.log(err)
	return {
		type: types.SUBMIT_POST_FAIL
	}
}
