import React from 'react'

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
<<<<<<< HEAD
    render() {
        const buttons = this.props.tabs.map((tab, index) => {
            return (
                <button key={index}>
                    {tab.name}
                </button>
            )
        })
=======
    state = {
        currentTabIndex: 0
    }
    handleButtonClick = (index) => {
        this.setState({ currentTabIndex: index })
    }
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ))
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className="content">
                {currentTab.content}
            </div>
        )
    }
    render() {
>>>>>>> 353fb2f0f18df3af84ff72959c56ce44fd74a7ea
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
  }
  

  export default Tabs;