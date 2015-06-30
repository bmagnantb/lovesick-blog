import React from 'react'
import Router from 'react-router'
import Iso from 'iso'
import Bluebird from 'bluebird'
import config from 'config'

import routes from '../../client/routes'
import AltApp from '../../client/AltApp'

import AltContext from '../../client/components/AltContext'

export default function render(req, res) {

	var alt = new AltApp()
	var iso = new Iso()

	var router = Router.create({
		routes,
		location: req.path,
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
		React.renderToString(<AltContext alt={alt} childComponent={Handler} />)

		// wait for async actions to complete
		Bluebird.all(alt.asyncActions).then(() => {

			// 2nd render & send
			var content = React.renderToString(<AltContext alt={alt} childComponent={Handler} />)
			iso.add('', alt.takeSnapshot())
			res.render('index', {content, iso: iso.render(), staticFileUrl: process.env.STATIC_FILE_URL || config.get('staticFileUrl')})
		})


	})
}