import render from './render'

export default function addRoutes(app) {
	app.get('*', render)
}