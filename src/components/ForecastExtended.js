import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import ForecastItem from './ForecastItem';
import './styles.css';



const renderForecastItemDays = (forecast_data) => {
    // key={`${forecast.weekDay}${forecast.hour}`}
    return forecast_data.map( (forecast) => (
            <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}/>
        )
    );
}

const renderProgress = () => {
    return (
        <div>
            <h3>"Cargando pronostico extendido..."</h3>
            <LinearProgress color="primary" />
        </div>   
    );
}

const ForecastExtended = ({city, forecastData}) => ( 
    <div>
        <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
        {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
};

export default ForecastExtended;