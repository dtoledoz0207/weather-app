import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';

//Importacion de los actionsCreators antes de utilizar el bindActionCreators
//import {setSelectedCity, setWeather} from './../actions';

//Importacion de los actionsCreators para utilizar el bindActionsCreator
import * as actions from './../actions';

import {getWeatherCities, getCity} from './../reducers';





class LocationListContainer extends Component{

    componentDidMount(){
        const {setWeather, setSelectedCity, cities, city} = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        //console.log(`handleSelectedLocation: ${city}`);
        /* ASI SE DISPARA UNA ACCION ANTES DE INTEGRAR connect de LA LIBRERIA react-redux
          store.dispatch(setCity(city));
        */
    
        // DE ESTA FORMA DE DISPARA UNA ACCION UTILIZANDO LA LIBRERIA react-redux
        this.props.setSelectedCity(city);
    };


    render(){
        return (
            <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation}></LocationList>
        );
    }
}



// VALIDACION DE PROPIEDADES ANTES DE UTILIZAR EL bindActionCreators
/*LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    dispatchSetWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired
};*/

// VALIDACION DE PROPIEDADES UTILIZANDO EL bindActionCreators
LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired
};

// PARA QUE EL COMPONENTE HAGA USO DEL store INCORPORANDO LA LIBRERIA react-redux
//Este mapDispatchToProps se utilizó antes de integrar el bindActionCreators
/*const mapDispatchToProps = dispatch => (
    {
        dispatchSetCity: payload => dispatch(setSelectedCity(payload)),
        dispatchSetWeather: payload => dispatch(setWeather(payload))
    }
);*/

// mapDispatchToProps con integracion de bindActionCreators
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => (
    {
        citiesWeather: getWeatherCities(state),
        city: getCity(state)
    }
    
);

const LocationListContainerConnected = connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);



export default LocationListContainerConnected;