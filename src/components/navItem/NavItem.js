import React, {Component} from 'react'

class NavItem extends Component {

	render() {
		return (
				<div style={this.props.style}>
					<a style={this.props.style.linkStyle} href={`${(this.props.title.toLowerCase())}`}>
						{this.props.title}
					</a>
				</div>
		)
	}
}

export default NavItem
