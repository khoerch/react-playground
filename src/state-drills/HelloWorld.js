import React from 'react'

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    }
    handleButtonWorld = () => {
        this.setState({ who: 'World'})
    }
    handleButtonFriend = () => {
        this.setState({ who: 'Friend'})
    }
    handleButtonReact = () => {
        this.setState({ who: 'React'})
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleButtonWorld}>
                    World
                </button>
                <button onClick={this.handleButtonFriend}>
                    Friend
                </button>
                <button onClick={this.handleButtonReact}>
                    React
                </button>
            </div>
        )
    }
}

export default HelloWorld