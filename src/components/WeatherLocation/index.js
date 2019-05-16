import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';

//import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

//import transformWeather from './../../services/transformWeather';
import './styles.css';




/*handleUpdateClick = () => {

    const API_WEATHER = getUrlWeatherByCity(this.state.city);

    fetch(API_WEATHER).then(resolve => {
        return resolve.json();
    }).then(data => {
        //console.log("data: ", data);
        const newWeather = transformWeather(data);
        //console.log("NewWeather: ", newWeather);

        this.setState({
            data: newWeather,
        });
    });
}*/


const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? 
            <WeatherData data={data}></WeatherData> : 
            <CircularProgress size={70} color={'secondary'}/>
        }
        {/*<button onClick={this.handleUpdateClick}>Actualizar</button>*/}
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherLocation;