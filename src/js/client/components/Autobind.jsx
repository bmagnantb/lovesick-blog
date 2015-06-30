import React from 'react'

export default class Autobind extends React.Component {
	_bind(...methods) {
		methods.forEach((method) => this[method] = this[method].bind(this))
	}
}