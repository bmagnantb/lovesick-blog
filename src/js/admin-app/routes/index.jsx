import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import { AltContext } from '../components'
import { NewArticle, NewVideo, Panel } from '../components'

export default (
	<Route path="/admin">
		<Route path="/admin/panel" handler={Panel} />
		<Route path="/admin/new-article" handler={NewArticle} />
		<Route path="/admin/new-video" handler={NewVideo} />
		<Redirect from="*" to="/admin/panel" />
	</Route>
)