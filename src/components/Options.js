import React, { Component } from "react";
import Filter from './Filter'
import Sorts from './Sorts'

export default class Options extends Component{
    render(){
        return(
            <div>
                <Filter changeState={this.props.changeState}/>
                <Sorts changeState={this.props.changeState} />
            </div>
        )
    }
}