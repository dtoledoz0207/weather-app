const LOCATION = "Colima,col";
const API_KEY = "ffdbf3658a836974cb02aaaaa39303d5";
const URL_BASE_WEATHER = "http://api.openweathermap.org/data/2.5/weather"

export const API_WEATHER = `${URL_BASE_WEATHER}?q=${LOCATION}&appid=${API_KEY}`;