import React from 'react'
import Router from 'react-router'

import routes from '../admin-app/routes'

window.onload = app

function app() {
	Router.run(routes, Router.HistoryLocation, (Handler, state) => {
		React.render(<Handler />, document.querySelector('#app-container'))
	})
}