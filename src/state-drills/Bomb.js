import React from 'react';

class Bomb extends React.Component{
    constructor(props) {
        super(props)
        this.state = { 
            count: 0,
            note: 'tick'
        }
        console.log('constructor')
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                count: this.state.count + 1
            })
            if (this.state.count >= 8) {
                this.setState({
                    note: 'BOOM!'
                })
                clearInterval(this.interval)
            } else if (this.state.count % 2 === 0) {
                this.setState({
                    note: 'tock'
                })
            } else {
                this.setState({
                    note: 'tick'
                })
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                <p>{this.state.note}</p>
            </div>
        )
    }
}

export default Bomb;