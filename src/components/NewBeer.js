import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

export default class NewBeer extends Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }

    handleFormInput = event => {
        const name = event.target.name;
        let value = (event.target.type === 'number')? Number(event.target.value): event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {

        event.preventDefault();
        const {name, 
            tagline, 
            description, 
            first_brewed, 
            brewers_tips, 
            attenuation_level, 
            contributed_by} = this.state;
        
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by,
            id: uuidv4()
            }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            })
            
        this.setState(() => ({
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: ""
        }))
    }

    render() {
        return (
            <div>
                <Navbar/>
                <form className="ml-3" onSubmit={this.handleSubmit} style={{width:'100%', marginBottom: '50px'}}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" style={{width:'90%', height: '25px', marginBottom: '20px'}}
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleFormInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tagline">Tagline</label>
                        <input className="form-control" style={{width:'90%', height: '25px', marginBottom: '20px'}}
                        type="text"
                        name="tagline"
                        id="tagline"
                        value={this.state.tagline}
                        onChange={this.handleFormInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input className="form-control" style={{width:'90%', height: '25px', marginBottom: '20px'}}
                        type="text"
                        name="description"
                        id="description"
                        value={this.state.description}
                        onChange={this.handleFormInput}
                        />
                    </div>                    
                    <div className="form-group">
                        <label htmlFor="first_brewed">First Brewed</label>
                        <input className="form-control" style={{width:'90%', height: '25px', marginBottom: '20px'}}
                        type="text"
                        name="first_brewed"
                        id="first_brewed"
                        value={this.state.first_brewed}
                        onChange={this.handleFormInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewers_tips">Brewer Tips</label>
                        <input className="form-control" style={{width:'90%', height: '25px', marginBottom: '20px'}}
                        type="text"
                        name="brewers_tips"
                        id="brewers_tips"
                        value={this.state.brewers_tips}
                        onChange={this.handleFormInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="attenuation_level">Attenuation Level</label>
                        <input className="form-control" style={{width:'90%', height: '25px', marginBottom: '20px'}}
                        type="number"
                        name="attenuation_level"
                        id="attenuation_level"
                        value={this.state.attenuation_level}
                        onChange={this.handleFormInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contributed_by">Contributed By</label>
                        <input className="form-control" style={{width:'90%', height: '25px', marginBottom: '20px'}}
                        type="text"
                        name="contributed_by"
                        id="contributed_by"
                        value={this.state.contributed_by}
                        onChange={this.handleFormInput}
                        />
                    </div>   
                    <button type="submit" className="btn btn-primary">ADD NEW</button>                                                                            
                </form>
            </div>
        )
    }
}
