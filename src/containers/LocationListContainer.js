import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import {setSelectedCity} from './../actions';





class LocationListContainer extends Component{

    handleSelectedLocation = city => {
        //console.log(`handleSelectedLocation: ${city}`);
        /* ASI SE DISPARA UNA ACCION ANTES DE INTEGRAR connect de LA LIBRERIA react-redux
          store.dispatch(setCity(city));
        */
    
        // DE ESTA FORMA DE DISPARA UNA ACCION UTILIZANDO LA LIBRERIA react-redux
        this.props.dispatchSetCity(city);
    };


    render(){
        return (
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
        );
    }
}




LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};

// PARA QUE EL COMPONENTE HAGA USO DEL store INCORPORANDO LA LIBRERIA react-redux
const mapDispatchToProps = dispatch => (
    {
        dispatchSetCity: payload => dispatch(setSelectedCity(payload))
    }
);

const LocationListContainerConnected = connect(null, mapDispatchToProps)(LocationListContainer);



export default LocationListContainerConnected;