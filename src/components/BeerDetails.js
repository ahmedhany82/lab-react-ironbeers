import React, { Component } from 'react'
import axios from 'axios'

export default class BeerDetails extends Component {
    state = {
        beer: null
    }

    componentDidMount() {
        const id = this.props.match.params.beerId
        console.log("component mounted")
        console.log(id)
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
                <div style={{width: '50vw'}} className="d-flex flex-column align-items-center justify-content-center mx-auto ">
                    <img style={{height: "40vh", width: "7vw"}} className="ml-5 mr-5 mt-5 mb-5" src={this.state.beer.image_url} alt=""/>
                    <div style={{width: '50vw'}} className="d-flex flex-row justify-content-between align-self-center mb-3">
                        <h3>{this.state.beer.name}</h3>
                        <p style={{color: 'grey'}} >{this.state.beer.attenuation_level}</p>
                    </div>
                    <div style={{width: '50vw'}} className="d-flex flex-row justify-content-between align-self-center mb-3">
                        <h4 style={{color: 'grey'}} >{this.state.beer.tagline}</h4>
                        <p>{this.state.beer.first_brewed}</p>
                    </div>
                    <p style={{width: '50vw'}} >{this.state.beer.description}</p>
                    <p style={{width: '50vw', color: 'grey'}}>{this.state.beer.contributed_by}</p>
                </div>
            </div>
        )
    }
}

{/* <div style={{width: '50vw'}} className="d-flex flex-column align-items-center justify-content-center mx-auto ">
<img style={{height: "220px", width: "55px"}} className="ml-5 mr-5 mt-5 mb-5" src={this.state.beer.image_url} alt=""/>
<div style={{width: "400px"}} className="d-flex flex-row justify-content-between align-self-center mb-3">
    <h3>{this.state.beer.name}</h3>
    <p style={{color: 'grey'}} >{this.state.beer.attenuation_level}</p>
</div>
<div style={{width: "400px"}} className="d-flex flex-row justify-content-between align-self-center mb-3">
    <h4 style={{color: 'grey'}} >{this.state.beer.tagline}</h4>
    <p>{this.state.beer.first_brewed}</p>
</div>
<p style={{width: "400px"}} >{this.state.beer.description}</p>
<p style={{width: "400px", color: 'grey'}}>{this.state.beer.contributed_by}</p>
</div> */}