import React from 'react'
import Router from 'react-router'
import Iso from 'iso'

import { routes, newAltApp } from '../app'
import { AltContext } from '../react-utils'

window.onload = app

function app() {
	var alt = newAltApp()

	Iso.bootstrap((state, meta, node) => {
		alt.bootstrap(state)

		Router.run(routes, Router.HistoryLocation, (Handler, state) => {
			React.render(<AltContext alt={alt} childComponent={Handler} />, document.querySelector('#app-container'))
		})
	})
}