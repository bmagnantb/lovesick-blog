import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import { AltContext } from '../components'
import { HomeView } from '../views'

export default (
	<Route path="*" handler={HomeView} />
)