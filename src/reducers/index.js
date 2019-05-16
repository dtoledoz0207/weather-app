import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import {cityReducer} from './cityReducer';
import {citiesReducer, getForecastDataFromCities as _getForecastDataFromCities, getWeatherCities as _getWeatherCities} from './citiesReducer';


export default combineReducers(
    {
        city: cityReducer,
        cities: citiesReducer
    }
);


export const getCity = createSelector(state => state.city, city => city);

export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);