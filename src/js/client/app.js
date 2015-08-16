import React from 'react'
import Router from 'react-router'
import Iso from 'iso'
import AltContainer from 'alt/AltContainer'

import { routes, newAltApp } from '../app'

window.onload = app

function app() {
	console.log('app starting')
	var alt = newAltApp()

	Router.run(routes, Router.HistoryLocation, (Handler, state) => {
		React.render(<AltContainer flux={alt}><Handler /></AltContainer>, document.querySelector('#app-container'))
	})

	// Iso.bootstrap((state, meta, node) => {
	// 	console.log('state', state)
	// 	alt.bootstrap(state)

	// 	Router.run(routes, Router.HistoryLocation, (Handler, state) => {
	// 		React.render(<AltContainer flux={alt}><Handler /></AltContainer>, document.querySelector('#app-container'))
	// 	})
	// })
}