import { AltApp } from '../react-utils'
import actions from './actions'
import stores from './stores'

export default function newAltApp() {
	return new AltApp(actions, stores)
}
