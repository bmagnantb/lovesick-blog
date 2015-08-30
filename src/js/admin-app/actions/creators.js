import types from './types'

export function setPostType(postType) {
	return {
		type: types.SET_POST_TYPE,
		payload: postType
	}
}