import React from 'react'

export default function BeerDetails(props) {
    return (
        <div>
            <div style={{width: '50vw'}} className="d-flex flex-column align-items-center justify-content-center mx-auto ">
                    <img style={{height: "40vh", width: "7vw"}} className="ml-5 mr-5 mt-5 mb-5" src={props.beer.image_url} alt=""/>
                    <div style={{width: '50vw'}} className="d-flex flex-row justify-content-between align-self-center mb-3">
                        <h3>{props.beer.name}</h3>
                        <p style={{color: 'grey'}} >{props.beer.attenuation_level}</p>
                    </div>
                    <div style={{width: '50vw'}} className="d-flex flex-row justify-content-between align-self-center mb-3">
                        <h4 style={{color: 'grey'}} >{props.beer.tagline}</h4>
                        <p>{props.beer.first_brewed}</p>
                    </div>
                    <p style={{width: '50vw'}} >{props.beer.description}</p>
                    <p style={{width: '50vw', color: 'grey'}}>{props.beer.contributed_by}</p>
            </div>
        </div>
    )
}
