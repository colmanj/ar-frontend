import React, {Component} from 'react'
import NavItem from '../navItem/NavItem'

class NavBar extends Component {

	render() {
		return (
			<div style={this.props.style}>
				{this.props.titles &&
					this.props.titles.map(title => {
						return <NavItem title={title} style={this.props.navItemStyle} key={title} />
					})
				}
			</div>
		)
	}
}

export default NavBar
