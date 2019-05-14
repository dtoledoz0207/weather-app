import transformForecast from './../services/transformForecast';
import {API_KEY, URL_BASE_FORECAST} from './../constants/api_url';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

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


export const setSelectedCity = payload => {
    return dispatch => {

        const url_forecast = `${URL_BASE_FORECAST}?q=${payload}&appid=${API_KEY}`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast).then(resolve => {
            return resolve.json();
        }).then(forecast_data => {
            //console.log(forecast_data);
            const forecastData = transformForecast(forecast_data);
            console.log(forecastData);
            
            // modificar el estado con el resutado de la promise (fetch)
            dispatch(setForecastData({city: payload, forecastData: forecastData}));
        });

    };
};