import React, { Component } from 'react'
import axios from 'axios'
import BeerDetails from './BeerDetails'
import Navbar from './Navbar'

export default class RandomBeer extends Component {

    state = {
        beer: null
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(response => {
            this.setState({
                beer: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        if (this.state.beer === null) {
            return <h3>Loading</h3>
        }
        return (
            <div>
                <Navbar/>
                <BeerDetails beer={this.state.beer}/>
            </div>
        )
    }
}
