import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    city: 'Monterrey,mx'
};


// Esta linea es solo para utilizar la herramienta de desarrollo de redux en Chrome
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducers, initialState, composeEnhacers(applyMiddleware(thunk)));