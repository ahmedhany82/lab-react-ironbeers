import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default class Beers extends Component {

    state = {
        beers: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then(response => {
            this.setState({
                beers: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }


    render() {
        if (this.state.beers.length === 0) return <h3>Loading...</h3>
        let beersList = this.state.beers.map(beer => {
            return (
                <div style={{width: '50vw'}} className="d-flex flex-row justify-content-center mx-auto mt-3 mb-3">
                    <img style={{height: "28vh", width: "5vw"}} className="ml-5 mr-5" src={beer.image_url} alt=""/>
                    <div style={{height: "28vh", width: "30vw"}} className="d-flex flex-column justify-content-center align-self-center">
                        <Link to={`/beers/${beer._id}`} ><h1>{beer.name}</h1></Link>
                        <h3>{beer.tagline}</h3>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className="d-flex flex-column justify-content-center">
                <Navbar/>
                {beersList}
            </div>
        )
    }
}
