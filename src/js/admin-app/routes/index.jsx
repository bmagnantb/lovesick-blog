import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import App from '../App'
import { NewPostView, ConfirmPostView } from '../views'
import { Panel } from '../components'

export default (
	<Route path="/admin" handler={App}>
		<Route path="/admin/panel" handler={Panel} />
		<Route path="/admin/new-post" handler={NewPostView} />
		<Route path="/admin/new-post/confirm" handler={ConfirmPostView} />
		<Redirect from="*" to="/admin/panel" />
	</Route>
)