import React from 'react';

class Accordian extends React.Component{
    static defaultProps = { sections: [] };
    state = {
        currentSectionIndex: null
    }
    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
    }

    renderSections() {
        return this.props.sections.map((item, index) => (
            <li key={index}>
                <button type="button" onClick={() => this.handleButtonClick(index)}>
                    {item.title}
                </button>
                {(this.state.currentSectionIndex === index) && <p>{item.content}</p>}
            </li>
        ))
    }

    render() {
        return (
            <ul>
                {this.renderSections()}
            </ul>
        )
    }
}

export default Accordian;