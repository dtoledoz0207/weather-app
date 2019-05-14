import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCity, getForecastDataFromCities} from './../reducers';
import ForecastExtended from './../components/ForecastExtended';


class ForecastExtendedContainer extends Component {
    render(){
        const {city, forecastData} = this.props;
        return(
            city === null ? <h1>No se seleccionó ciudad</h1> : <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
};

const mapStateToProps = state => (
    {
        city: getCity(state),
        forecastData: getForecastDataFromCities(state)
    }
);

const ForecastExtendedContainerConnected = connect(mapStateToProps, null)(ForecastExtendedContainer);

export default ForecastExtendedContainerConnected;