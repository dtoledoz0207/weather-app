import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import {API_WEATHER} from './../../constants/api_url';
import transformWeather from './../../services/transformWeather';
import './styles.css';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constants/weathers';


const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Guadalajara",
            data: data
        };
    }

    handleUpdateClick = () => {
        fetch(API_WEATHER).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log("data: ", data);
            const newWeather = transformWeather(data);
            console.log("NewWeather: ", newWeather);

            this.setState({
                data: newWeather,
            });
        });
    }


    render(){

        const {city, data} = this.state;

        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;