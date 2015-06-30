import React from 'react'

export default class AltContext {
	getChildContext() {
		var alt = this.props.alt
		return { alt }
	}

	render() {
		return <this.props.childComponent {...this.props.childProps} />
	}
}

AltContext.childContextTypes = {
	alt: React.PropTypes.object.isRequired
}
