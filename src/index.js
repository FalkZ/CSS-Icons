import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './Icons.styl'
import './index.styl'

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

const Icons = ({ icons, onClick }) =>
	icons.map((icon, index) => (
		<div
			id={index}
			className={'Icon ' + icon}
			key={index}
			onClick={onClick.bind(this, icon)}
		/>
	))
const Preview = ({ icon }) => <div className={'Preview Icon ' + icon} />

class Showcase extends Component {
	constructor(props) {
		super(props)
		this.state = {
			icons: props.icons,
			icon: props.icons[props.icons.length - 1]
		}

		this.reload = this.reload.bind(this)
	}
	reload(icon) {
		this.setState({ icon })
	}

	render() {
		return (
			<div>
				<Preview icon={this.state.icon} />
				<Icons icons={this.state.icons} onClick={this.reload} />
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
			'Home',
			'Mail',
			'Pencil',
			'Globe',
			'Github',
			'Checkmark',
			'Heart',
			'Thumb',
			'Share',
			'Dot',
			'Person'
		]}
	/>,
	document.getElementById('Body')
)
