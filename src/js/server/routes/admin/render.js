import React from 'react'
import Router from 'react-router'
import config from 'config'

import routes from '../../../admin-app/routes'

export default function render(req, res) {

	var router = Router.create({
		routes,
		location: req.originalUrl,
		onAbort: (reason) => {
			if (reason.constructor.name === 'Redirect') {
				var { to, params, query } = reason
				var path = router.makePath(to, params, query)
				res.redirect(path)
				return
			}
		}
	})

	router.run((Handler, state) => {

		//first render
		var content = React.renderToString(<Handler />)

		res.render('authenticated', {
			content,
			staticFileUrl: process.env.SERVER_URL || config.get('staticFileUrl')
		})
	})
}