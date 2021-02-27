import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png'
import newBeerImage from '../assets/new-beer.png'
import randomBeerImage from '../assets/random-beer.png'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <img style={{width: "100%", height: "40vh"}} src={beersImage} className="mh-50" alt="beers.png"/>
                    <Link style={{width: "100%"}} to={'/beers'}><h1 className="text-left pt-3 pb-2 ml-5">All Beers</h1></Link>
                    <p  style={{height: "15vh"}} className="text-left ml-5 mr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus nibh turpis, eu convallis felis facilisis sit amet. 
                    Vestibulum ex nisl, suscipit quis arcu quis, finibus convallis nisl. Nulla et nibh et sapien accumsan sollicitudin ac sed urna. 
                    Fusce ac ex rutrum ante consectetur faucibus eu a urna. Aenean vitae massa in quam rutrum tincidunt. Quisque tempor consectetur 
                    magna id lacinia. Morbi feugiat semper nisl eget sodales. Etiam vitae dui tincidunt, iaculis magna a, volutpat purus. </p>
                </div>
                <div className="row">
                    <img style={{width: "100%", height: "40vh"}} src={newBeerImage} className="img-fluid" alt="beers.png"/>
                    <Link style={{width: "100%"}} to={'/random-beer'}><h1 className="text-left pt-3 pb-2 ml-5">Random Beer</h1></Link>
                    <p style={{height: "15vh"}} className="text-left ml-5 mr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus nibh turpis, eu convallis felis facilisis sit amet. 
                    Vestibulum ex nisl, suscipit quis arcu quis, finibus convallis nisl. Nulla et nibh et sapien accumsan sollicitudin ac sed urna. 
                    Fusce ac ex rutrum ante consectetur faucibus eu a urna. Aenean vitae massa in quam rutrum tincidunt. Quisque tempor consectetur 
                    magna id lacinia. Morbi feugiat semper nisl eget sodales. Etiam vitae dui tincidunt, iaculis magna a, volutpat purus. 
                    Etiam ac dignissim felis. Sed non vestibulum metus.</p>
                </div>
                <div className="row">
                    <img style={{width: "100%", height: "40vh"}} src={randomBeerImage} className="img-fluid" alt="beers.png"/>
                    <Link style={{width: "100%"}} to={'/new-beer'}><h1 className="text-left pt-3 pb-2 ml-5">New Beer</h1></Link>
                    <p style={{height: "15vh"}} className="text-left ml-5 mr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus nibh turpis, eu convallis felis facilisis sit amet. 
                    Vestibulum ex nisl, suscipit quis arcu quis, finibus convallis nisl. Nulla et nibh et sapien accumsan sollicitudin ac sed urna. 
                    Fusce ac ex rutrum ante consectetur faucibus eu a urna. Aenean vitae massa in quam rutrum tincidunt. Quisque tempor consectetur 
                    magna id lacinia. Morbi feugiat semper nisl eget sodales. Etiam vitae dui tincidunt, iaculis magna a, volutpat purus. 
                    Etiam ac dignissim felis. Sed non vestibulum metus.</p>
                </div>
            </div>
        )
    }
}
