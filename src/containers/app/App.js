import React, { Component } from 'react'
import HomePage from '../homePage/HomePage'

class App extends Component {
    render() {
        return (
            <div className="App" style={appStyle}>
                <HomePage />
            </div>
        )
    }
}

const appStyle = {
    height: '100vh',
    width: '100%'
}

export default App
