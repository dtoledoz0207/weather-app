import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';


class ForecastExtendedContainer extends Component {
    render(){
        return(
            this.props.city === null ? <h1>No se seleccionó ciudad</h1> : <ForecastExtended city={this.props.city} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
    {
        city: state.city
    }
);

const ForecastExtendedContainerConnected = connect(mapStateToProps, null)(ForecastExtendedContainer);

export default ForecastExtendedContainerConnected;