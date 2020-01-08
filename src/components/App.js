import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import hogs from '../porkers_data';
import PorkersContainer from './PorkersContainer';
import Options from './Options';

class App extends Component {
  constructor(){
    super()
    this.state = {
      greasedOnly : false,
      sort : "default"
    }
  }

  changeState = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  render() {
    return (
      <div className="App">
          < Header />
          < Options changeState={this.changeState}/>
          < PorkersContainer hogs={hogs} displayOption = {this.state} />
      </div>
    )
  }
}

export default App;
