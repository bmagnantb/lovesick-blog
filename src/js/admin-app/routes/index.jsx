import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import { StoreContainers, Panel } from '../components'
import { NewPostView, ConfirmPostView } from '../views'

export default (
	<Route path="/admin">
		<Route path="/admin/panel" handler={Panel} />
		<Route path="/admin/new-blog" handler={StoreContainers.injectNewPost(NewPostView)} />
		<Route path="/admin/new-vlog" handler={StoreContainers.injectNewPost(NewPostView)} />
		<Route path="/admin/confirm-post" handler={ConfirmPostView} />
		<Redirect from="*" to="/admin/panel" />
	</Route>
)