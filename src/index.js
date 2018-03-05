import './Icons.styl'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const getRandomNumber = range => Math.floor(Math.random() * Math.floor(range))

const Random = arr => {
	let randomArr = []
	arr.map(value => {
		let ran
		for (
			ran = getRandomNumber(arr.length);
			typeof randomArr[ran] !== 'undefined';
			ran = getRandomNumber(arr.length)
		) {}

		randomArr[ran] = value
	})

	return randomArr
}

const Icons = ({ icons }) =>
	icons.map((icon, index) => (
		<div id={index} className={'Icon ' + icon} key={index} />
	))

class Showcase extends Component {
	constructor(props) {
		super(props)
		this.state = { icons: props.icons }

		this.reload = this.reload.bind(this)
	}
	reload() {
		this.setState({ icons: Random(this.props.icons) })
	}

	render() {
		return (
			<div>
				<Icons icons={this.state.icons} />
				<button className="reload" onClick={this.reload}>
					reload
				</button>
			</div>
		)
	}
}

ReactDOM.render(
	<Showcase
		icons={[
			'Cross',
			'Window',
			'Plus',
			'Minus',
			'Facebook',
			'Instagram',
			'Youtube',
			'Link',
			'Menu',
			'Home'
		]}
	/>,
	document.getElementById('Body')
)
