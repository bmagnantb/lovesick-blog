import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

require('../../scss/style.scss')

// only log on client
var store = process.title !== 'browser'
	? applyMiddleware(thunkMiddleware)(createStore)(reducer)
	: applyMiddleware(thunkMiddleware, createLogger())(createStore)(reducer)

export default class App {
	render() {
		return (
			<div>
				<header>
					<h1><Link to="/admin">Lovesick Admin</Link></h1>
				</header>

				<Provider store={store}>
					{() => <RouteHandler />}
				</Provider>
			</div>
		)
	}
}