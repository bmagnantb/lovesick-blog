import React from 'react'
import { Route, DefaultRoute, Redirect } from 'react-router'

import AppView from '../views/AppView'

export default (
	<Route path="/" handler={AppView} />
)