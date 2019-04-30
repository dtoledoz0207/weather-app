import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';

import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

import transformWeather from './../../services/transformWeather';
import './styles.css';



class WeatherLocation extends Component {

    constructor(props){
        super(props);

        const {city} = props;

        this.state = {
            city: city,
            data: null
        };

        //console.log("constructor 1");
    }

    componentDidMount(){
        //console.log("componentDidMount 3");
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState){
        //console.log("componentDidUpdate 4");
    }


    handleUpdateClick = () => {

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
    }


    render(){
        //console.log("render 2");

        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;

        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> : 
                    <CircularProgress size={70} color={'secondary'}/>
                }
                {/*<button onClick={this.handleUpdateClick}>Actualizar</button>*/}
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;