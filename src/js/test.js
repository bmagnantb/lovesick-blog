import jsdom from 'jsdom'

before(finish => {
	jsdom.env({
		html: '<html><body></body></html>',
		done: (err, window) => {
			if (err) finish(err)
			global.window = window
			global.document = window.document
			global.navigator = window.navigator
			finish()
		}
	})
})