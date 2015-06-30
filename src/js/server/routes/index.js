import render from './render'

export default server

function server(app) {
	app.get('*', render)
}