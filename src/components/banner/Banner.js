import React, {Component} from 'react'

class Banner extends Component {

    render() {
        return (
            <div style={this.props.style}>
                {this.props.title}
            </div>
        )
    }
}

export default Banner
