import React, {Component} from 'react'
import {assign} from 'lodash'
import backgroundImage from '../../resources/home_bg.jpg'

import Banner from '../../components/banner/Banner'
import NavBar from '../../components/navBar/NavBar'

const bannerTitle = 'Freedom Builders'

class HomePage extends Component {

	render() {
		return (
			<div style={homePageStyle}>
				<Banner title={bannerTitle} style={bannerStyle} />
				<NavBar titles={navBarTitles} style={navBarStyle} navItemStyle={navItemStyle} />
			</div>
		)
	}
}

const homePageStyle = {
	position: 'relative',
	height: '100%',
	width: '100%',
	backgroundImage: `url(${backgroundImage})`,
	backgroundSize: '100%',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundColor: '#424242'
}

const bannerStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	fontSize: '72px',
	fontWeight: '700',
	color: 'white'
}

const navBarTitles = [
	'Build.', 'Learn.', 'Share.'
]

const navBarStyle = {
	marginTop: '65px',
	position: 'absolute',
	display: 'flex',
	width: '100%',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	flexFlow: 'row nowrap',
	justifyContent: 'center',
	alignItems: 'center'
}

const navItemStyle = {
	width: '250px',
	height: '100px',
	lineHeight: '100px',
	flex: '0 1 auto',
	fontSize: '34px',
	textAlign: 'center',
	linkStyle: {
		textDecoration: 'none',
		color: 'white'
	}
}

export default HomePage
