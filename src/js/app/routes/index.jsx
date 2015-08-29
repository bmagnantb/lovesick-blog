import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import App from '../App'
import { HomeView, PostView } from '../views'

export default (
	<Route path="/" handler={App}>
		<Route name="home" path="/" handler={HomeView} />
		<Route name="post" path="/posts/:postRoute" handler={PostView} />
		<Redirect from="*" to="home" />
	</Route>
)