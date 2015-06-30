import React from 'react'
import { RouteHandler } from 'react-router'
import request from 'superbird'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class AppView extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<RouteHandler />
				<Footer />
			</div>
		)
	}
}