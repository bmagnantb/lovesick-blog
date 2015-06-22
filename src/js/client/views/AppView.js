import React from 'react'
import request from 'superbird'

export default class AppView {
	componentDidMount() {
		request.get('/blog').end().then(function({body}) {
			console.log(body)
		})
	}

	render() {
		return <h1>Lovesick</h1>
	}
}