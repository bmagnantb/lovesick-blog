import React from 'react'
import Router from 'react-router'
import Iso from 'iso'
import AltContainer from 'alt/AltContainer'

import { routes, newAltApp } from '../admin-app'

window.onload = app

function app() {
	var alt = newAltApp()

	Iso.bootstrap((state, meta, node) => {
		alt.bootstrap(state)

		Router.run(routes, Router.HistoryLocation, (Handler, state) => {
			React.render(<AltContainer flux={alt}><Handler /></AltContainer>, document.querySelector('#app-container'))
		})
	})
}