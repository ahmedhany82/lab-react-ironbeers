import React, { Component } from 'react'
import axios from 'axios'
import BeerDetails from './BeerDetails'

export default class SingleBeer extends Component {
    state = {
        beer: null
    }

    componentDidMount() {
        const id = this.props.match.params.beerId
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then(response => {
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
                <BeerDetails beer={this.state.beer}/>
            </div>
        )
    }
}