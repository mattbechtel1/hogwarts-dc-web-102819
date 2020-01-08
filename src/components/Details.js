import React, { Component } from "react";

export default class Details extends Component{
    render(){
        const {specialty, greased, weight} = this.props.hog
        let isGreasy = greased ? 'Yes' : 'No'
        if(this.props.clicked){
        return(
            <div>
                <div className="content">

                <div className="meta">
                    <span className="date">Specialty: {specialty}</span>
                </div>
                <div className="description">
                    Greased? {isGreasy}
                </div>
                </div>
                
                <div className="extra content">
                <a>
                    Weight: {weight} <br/>
                    Medal: {this.props.hog['highest medal achieved']}
                </a>
                </div>  
            </div>     
        )}
        else{
            return <a></a>
        }
    }
}