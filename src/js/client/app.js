import React from 'react'
import Router from 'react-router'
import Iso from 'iso'

import routes from './routes'
import AltApp from './AltApp'
import AltContext from './components/AltContext'

window.onload = app

function app() {
	var alt = new AltApp()

	Iso.bootstrap((state, meta, node) => {
		alt.bootstrap(state)

		Router.run(routes, Router.HistoryLocation, (Handler, state) => {
			React.render(<AltContext alt={alt} childComponent={Handler} />, document.querySelector('#app-container'))
		})
	})
}