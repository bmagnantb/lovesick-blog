import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import App from '../App'
import { DateSearchView, HomeView, PostView } from '../views'

export default (
	<Route path="/" handler={App}>
		<Route name="home" path="/" handler={HomeView} />
		<Route name="post" path="/posts/:postRoute" handler={PostView} />
		<Route name="datesearch" path="/posts/from/:date" handler={DateSearchView} />
		<Redirect from="*" to="home" />
	</Route>
)