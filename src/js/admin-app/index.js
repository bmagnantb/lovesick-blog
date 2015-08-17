// all custom modules required by both server render route and client app
import routes from './routes'
import newAltApp from './newAltApp'
import { AltContext } from './components'

require('../../scss/style.scss')

export default {
	routes,
	newAltApp,
	AltContext
}