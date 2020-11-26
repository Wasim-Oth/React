import React from 'react';
import citiesDetails from './city-weather.json';
import { v4 as uuidv4 } from 'uuid';

function Cities( {props}){
    const {weather, main, sys, coord, name } = props;
 return ( 
    <div className= 'container'>
        <h2> {name}, {sys.country}  </h2>
        <h3> {weather[0].main}</h3>
        <p>  {weather[0].description}</p>
        <p>  min temp: {main.temp_min}</p>
        <p>  max temp: {main.temp_max}</p>
        <p>  location: {coord.lon}, {coord.lat}</p>
    </div>
 )
}

function showCitiesDetails(){
    return(
        <div>
            <h1> weather </h1>
            {citiesDetails.map(city => <Cities key={uuidv4()} props={city}/>)}
        </div>
    )
}

export default showCitiesDetails;