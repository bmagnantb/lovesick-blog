import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import { AltContext, StoreContainers } from '../components'
import { HomeView, PostView, AppView } from '../views'

export default (
	<Route path="/" handler={AppView}>
		<Route name="home" path="/" handler={StoreContainers.injectPosts(<HomeView />)} />
		<Route name="post" path="/posts/:title" handler={StoreContainers.injectPosts(<PostView />)} />
		<Redirect from="*" to="home" />
	</Route>
)