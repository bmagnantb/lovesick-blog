import React from 'react'
import { RouteHandler, Link } from 'react-router'

require('../../../scss/style.scss')

export default class AppView {
	render() {
		return (
			<div>
				<header>
					<h1><Link to="/">Lovesick</Link></h1>
				</header>

				<RouteHandler />

				<div className="footer-placeholder"></div>
				<footer>
					<h6>Copyright American Unicorn 2015</h6>
				</footer>
			</div>
		)
	}
}