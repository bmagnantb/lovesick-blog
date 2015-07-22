import request from 'superbird'

window.onload = app

function app() {

	var form = document.querySelector('form')

	form.addEventListener('submit', (evt) => {
		evt.preventDefault()
		var username = document.querySelector('#username')
		var password = document.querySelector('#password').value
		var user = { username: username.value, password }
		var post = request.post('/admin/login').query(user).end()
		post.then((resp) => {
			if (resp.status === 401) {
				document.querySelector('#login-error').innerHTML = '<h5>Login incorrect.</h5>'
				form.reset()
				username.focus()
			}
			else {
				document.location.pathname = resp.text
			}
		})
	})

}