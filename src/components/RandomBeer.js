import React, { Component } from 'react'
import Navbar from './Navbar'

export default class RandomBeer extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>Hello from the RandomBeer page!</h1>
            </div>
        )
    }
}
