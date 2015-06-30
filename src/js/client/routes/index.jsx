import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import AltContext from '../components/AltContext'
import AppView from '../views/AppView'
import HomeView from '../views/HomeView'
import ArticleView from '../views/ArticleView'
import PodcastView from '../views/PodcastView'

import injectBlogStore from '../components/storeContainers/injectBlogStore'
import injectPodcastStore from '../components/storeContainers/injectPodcastStore'

export default (
	<Route path="/" handler={AppView}>
		<Route name="home" path="/" handler={HomeView} />
		<Route name="article" path="/articles/:id" handler={injectBlogStore(ArticleView)} />
		<Route name="podcast-episode" path="podcast/:id" handler={injectPodcastStore(PodcastView)} />
		<Redirect from="*" to="home" />
	</Route>
)
