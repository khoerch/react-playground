import React from 'react'

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 8
    }
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    handleButton = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const result = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: result,
                spinningTheChamber: false
            })
        }, 2000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    componentDidMount() {
        if (this.state.spinningTheChamber === true) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.props.bulletInChamber === this.state.chamber) {
            return 'BANG!!!'
        } else {
            return "you're safe"
        }
    }
    render() {
        return (
            <div>
                <p>{this.componentDidMount()}</p>
                <button onClick={this.handleButton}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun