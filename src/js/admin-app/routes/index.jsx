import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import { StoreContainers, Panel } from '../components'
import { AppView, NewPostView, ConfirmPostView } from '../views'

export default (
	<Route path="/admin" handler={AppView}>
		<Route path="/admin/panel" handler={Panel} />
		<Route path="/admin/new-post" handler={StoreContainers.NewPost}>
			<Route path="/admin/new-post/blog" handler={NewPostView} />
			<Route path="/admin/new-post/vlog" handler={NewPostView} />
			<Route path="/admin/new-post/confirm" handler={ConfirmPostView} />
		</Route>
		<Redirect from="*" to="/admin/panel" />
	</Route>
)