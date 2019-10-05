import React from 'react';
<<<<<<< HEAD
import Tabs from './state/Tabs';
import Messages from './Messages'

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
]
=======
import './App.css';
import DemonymApp from './demonymapp/demonymApp.js';
>>>>>>> 353fb2f0f18df3af84ff72959c56ce44fd74a7ea

class App extends React.Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Tabs tabs={tabsProp}/>
        <Messages />
=======
        <DemonymApp />
>>>>>>> 353fb2f0f18df3af84ff72959c56ce44fd74a7ea
      </div>
    );
  }
}

export default App;