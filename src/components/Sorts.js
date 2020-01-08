import React, { Component } from "react";


export default class Sorts extends Component {
    render() {
        return (
            <div>
                <span>Sort Options </span>
                <select name='sort' onChange={this.props.changeState}>
                    <option value='default'>Default</option>
                    <option value='name'>Sort by Name</option>
                    <option value='weight'>Sort by Weight</option>
                </select>
            </div>
        )
    }
}