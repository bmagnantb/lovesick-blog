import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import { AltContext } from '../components'

export default (
	<Route path="/" handler={HandlerThing}>
	</Route>
)

class HandlerThing {
	render() {
		return <h1>Hello</h1>
	}
}