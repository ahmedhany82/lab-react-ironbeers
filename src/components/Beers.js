import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default class Beers extends Component {

    state = {
        query: "",
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

    handleSearch = event => {
        const query = event.target.value;
        this.setState({
            query: query
        })
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`).then(response => {
            this.setState({
                beers: response.data
              })      
        }).catch(err => {
            console.log(err)
        })
      }


    render() {       
        let beersList = this.state.beers.map(beer => {
            return (
                <div key={beer._id}>
                    <div style={{width: '50vw'}} className="d-flex flex-row justify-content-center mx-auto mt-3 mb-3">
                        <img style={{height: "28vh", width: "5vw"}} className="ml-5 mr-5" src={beer.image_url} alt=""/>
                        <div style={{height: "28vh", width: "30vw"}} className="d-flex flex-column justify-content-center align-self-center">
                            <Link to={`/beers/${beer._id}`} ><h1>{beer.name}</h1></Link>
                            <h3>{beer.tagline}</h3>
                            <p>Created by: {beer.contributed_by}</p>
                        </div>
                    </div>
                    <hr className="mx-auto mt-5 mb-3" style={{width:'30vw', height: '3vh', borderTop: "1px solid grey"}}></hr>
                </div>
            )
        })
        return (
            <div className="d-flex flex-column justify-content-center">
                <Navbar/>
                <form style={{width:'100%', marginBottom: '50px'}}>
                <div className="form-group">
                    <label className="ml-3" htmlFor="search">Find a Beer!</label>
                    <input className="form-control" style={{width:'90%', height: '25px', marginLeft: '20px'}}
                    type="text"
                    name="search"
                    id="search"
                    value={this.state.query}
                    onChange={this.handleSearch}
                    />
                </div>
                </form>
                {beersList}
            </div>
        )
    }
}
