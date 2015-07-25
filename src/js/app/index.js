// all custom modules required by both server render route and client app
import newAltApp from './newAltApp'
import { AltContext } from './components'
import routes from './routes'

export default {
	newAltApp,
	AltContext,
	routes
}