import React, { Component } from 'react'

const STATUS = 'Delayed'


class Tracker extends Component {

    state = {
        status: 'On Time'
    }

    componentDidMount () {
        setTimeout(()=>{
            this.setState({ status: 'Delayed' })
        },5000)
    }

    render () {
        return this.props.children(this.state.status)

    }
}

export default Tracker