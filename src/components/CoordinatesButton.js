// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        // console.log(event.clientX, event.clientY)
        let position = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(position)
    }
   
    render () {
        return (
            <button onClick={this.handleClick} >Button</button>

        )
    }
}