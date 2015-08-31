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