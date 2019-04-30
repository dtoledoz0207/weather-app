import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import {API_KEY, URL_BASE_FORECAST} from './../constants/api_url';
import transformForecast from './../services/transformForecast';
import ForecastItem from './ForecastItem';
import './styles.css';


/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temperature: 32,
    weatherState: 'sun',
    humidity: 10,
    wind: '23 m/s'
};*/

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({
                forecastData: null
            });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${URL_BASE_FORECAST}?q=${city}&appid=${API_KEY}`;

        fetch(url_forecast).then(resolve => {
            return resolve.json();
        }).then(forecast_data => {
            //console.log(forecast_data);
            const forecastData = transformForecast(forecast_data);
            console.log(forecastData);
            this.setState({
                forecastData: forecastData
            });
        });
    }

    renderForecastItemDays(forecast_data){
        // key={`${forecast.weekDay}${forecast.hour}`}
        return forecast_data.map( (forecast, index) => (
                <ForecastItem key={index} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}/>
            )
        );
    }

    renderProgress = () => {
        return (
            <div>
                <h3>"Cargando pronostico extendido..."</h3>
                <LinearProgress color="primary" />
            </div>   
        );
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state;

        return(
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
                {forecastData ?  this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;