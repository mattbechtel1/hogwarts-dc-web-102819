import React, { Component } from "react";
import PigCard from './PigCard'

export default class PorkersContainer extends Component {

    
    pigCards = () => {
        let hogSort = (hogs) => {
            if (this.props.displayOption.sort === 'weight') {
                return hogs.sort(function (a, b) {
                    return b.weight - a.weight
                })
            } else if (this.props.displayOption.sort === 'name') {
                return hogs.sort(function(a, b) {
                    if (a.name < b.name) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
            } else {
                return hogs
            }
        }

        if (this.props.displayOption.greasedOnly) {
            return hogSort(this.props.hogs).filter(hog => hog.greased).map(hog => <PigCard key={hog.name} hog={hog}  />)
        }
        else {
            return hogSort(this.props.hogs).map(hog => <PigCard key={hog.name} hog={hog}  />)
        }
        // return this.props.hogs.map(hog => <PigCard key={hog.name} hog={hog} />)
    }

    render() {
        return <div>{this.pigCards()}</div>
    }
}