import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import hogs from '../porkers_data';
import PorkersContainer from './PorkersContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Header />
          < PorkersContainer hogs={hogs} />
      </div>
    )
  }
}

export default App;
