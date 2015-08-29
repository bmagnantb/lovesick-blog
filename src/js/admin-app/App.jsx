import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { Provider } from 'react-redux'

require('../../scss/style.scss')

export default class AppView {
	render() {
		return (
			<div>
				<header>
					<h1><Link to="/admin">Lovesick Admin</Link></h1>
				</header>

				<Provider>
					{() => <RouteHandler />}
				</Provider>
			</div>
		)
	}
}