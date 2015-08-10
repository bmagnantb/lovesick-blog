import React from 'react'
import Router from 'react-router'
import Iso from 'iso'
import Bluebird from 'bluebird'
import config from 'config'
import AltContainer from 'alt/AltContainer'

import { routes, newAltApp } from '../../../app'

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

		var alt = newAltApp()
		var iso = new Iso()

		//first render
		React.renderToString(<AltContainer flux={alt}><Handler /></AltContainer>)

		// wait for async actions to complete
		Bluebird.all(alt.asyncActions).then(() => {

			// 2nd render & send
			var content = React.renderToString(<AltContainer flux={alt}><Handler /></AltContainer>)
			iso.add('', alt.takeSnapshot())
			res.render('index', {content, iso: iso.render(), staticFileUrl: process.env.STATIC_FILE_URL || config.get('staticFileUrl')})
		})


	})
}