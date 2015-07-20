import React from 'react'

import { VlogPost, Sidebar } from '../components'

export default class HomeView {
	render() {
		return (
			<div className="home-view">
				<main className="home">
					<VlogPost />
				</main>
				<Sidebar />
			</div>
		)
	}
}