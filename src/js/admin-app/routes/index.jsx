import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import { NewPostView, ConfirmPostView } from '../views'
import { Panel } from '../components'

export default (
	<Route path="/admin">
		<Route path="/admin/panel" handler={Panel} />
		<Route path="/admin/new-article" handler={NewPostView} />
		<Route path="/admin/new-video" handler={NewPostView} />
		<Route path="/admin/confirm-post" handler={ConfirmPostView} />
		<Redirect from="*" to="/admin/panel" />
	</Route>
)