import React, { Component } from 'react'

class Bomb extends React.Component {

    constructor(props) {
        super()
        this.state = { secondsLeft: props.initialCount }
        }

    timerAtZero = () => {
        if (this.state.secondsLeft === 0) {
            return <div>Boom!</div>
        } else {
            return <div>{`${this.state.secondsLeft} seconds left before I go boom!`}</div>
        }
    }

    render() {
        console.log(this.timerAtZero())
        return this.timerAtZero();
    }
}

export default Bomb
