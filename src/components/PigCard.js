import React, { Component } from "react";
import pigImg from '../hog-imgs/cherub.jpg'
import Details from './Details';



export default class PigCard extends Component {
  
  constructor(){
    super()
    this.state={
      clicked : false
    } 
  }

  clickHandler = (e) => {
    this.setState({
      clicked : true
    })
  }

  render() {
    const {name} = this.props.hog
    return (
        <div className="ui card" onClick={this.clickHandler}>
          
          <div className="image">
            <img src={pigImg} alt="a pig" />
          </div>
          
          <div className="content">
            <a className="header">{name}</a>
            <Details clicked={this.state.clicked} hog={this.props.hog} />
          </div>
        </div>
    )
  }
}
