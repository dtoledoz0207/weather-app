import {combineReducers} from 'redux';
import {cityReducer} from './cityReducer';
import {citiesReducer, getForecastDataFromCities as _getForecastDataFromCities} from './citiesReducer';


export default combineReducers(
    {
        city: cityReducer,
        cities: citiesReducer
    }
);


export const getCity = state => state.city;

export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities, getCity(state)));