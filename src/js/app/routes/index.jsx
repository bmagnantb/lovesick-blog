import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import { AltContext, StoreContainers } from '../components'
import { HomeView, PostView, AppView } from '../views'

export default (
	<Route path="/" handler={AppView}>
		<Route path="/" handler={StoreContainers.Posts}>
			<Route name="home" path="/" handler={HomeView} />
			<Route name="post" path="/posts/:postRoute" handler={PostView} />
			<Redirect from="*" to="home" />
		</Route>
	</Route>
)