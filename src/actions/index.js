import transformForecast from './../services/transformForecast';
import {API_KEY, URL_BASE_FORECAST} from './../constants/api_url';

import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

// actionCreator
const setCity = payload => (
    {
        type: SET_CITY, 
        payload: payload
    }
);

const setForecastData = payload => (
    {
        type: SET_FORECAST_DATA,
        payload: payload
    }
);

const getWeatherCity = payload => (
    {
        type: GET_WEATHER_CITY,
        payload: payload
    }
);

const setWeatherCity = payload => (
    {
        type: SET_WEATHER_CITY,
        payload: payload
    }
);


export const setSelectedCity = payload => {
    return (dispatch, getState) => {

        const url_forecast = `${URL_BASE_FORECAST}?q=${payload}&appid=${API_KEY}`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        if(date && (now - date) < 1*60*1000){
            return;
        }else{

            return fetch(url_forecast).then(resolve => {
                return resolve.json();
            }).then(forecast_data => {
                //console.log(forecast_data);
                const forecastData = transformForecast(forecast_data);
                console.log(forecastData);
                
                // modificar el estado con el resutado de la promise (fetch)
                dispatch(setForecastData({city: payload, forecastData: forecastData}));
            });

        }

    };
};


export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            const API_WEATHER = getUrlWeatherByCity(city);

            fetch(API_WEATHER).then(resolve => {
                return resolve.json();
            }).then(data => {
                //console.log("data: ", data);
                const newWeather = transformWeather(data);
                //console.log("NewWeather: ", newWeather);

                dispatch(setWeatherCity({city, weather: newWeather}));
            });
            
        });
    }
}