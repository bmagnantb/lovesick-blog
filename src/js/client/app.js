import React from 'react'
import router from './router'

window.onload = app

function app() {
	router.run(function(Handler, state) {
		React.render(<Handler />, document.querySelector('#app-container'))
	})
}