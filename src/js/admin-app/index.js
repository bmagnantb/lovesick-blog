// all custom modules required by both server render route and client app
import routes from './routes'
import AltApp from './AltApp'
import { AltContext } from './components'

export default {
	routes,
	AltApp,
	AltContext
}