import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from './reducers'

require('../../scss/style.scss')

// only log in client
var store = process.title !== 'browser'
	? applyMiddleware(thunkMiddleware)(createStore)(reducer)
	: applyMiddleware(thunkMiddleware, createLogger())(createStore)(reducer)

export default class App {
	render() {
		return (
			<div>
				<header>
					<h1><Link to="/">Lovesick</Link></h1>
				</header>

				<Provider store={store}>
					{() => <RouteHandler />}
				</Provider>

				<div className="footer-placeholder"></div>
				<footer>
					<h6>Copyright American Unicorn 2015</h6>
				</footer>
			</div>
		)
	}
}