import React from 'react'

class Filter extends React.Component {
    render() {
        return (
            <div>
            <input type="checkbox" name="greasedOnly" onChange={this.props.changeState} /> Show only greased pigs
        </div>
    )
    }
}

export default Filter;

