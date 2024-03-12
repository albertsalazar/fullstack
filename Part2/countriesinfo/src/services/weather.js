import axios from 'axios'
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl =  "https://api.openweathermap.org/data/2.5/weather?"
const iconBaseUrl = 'https://openweathermap.org/img/wn/'

const getWeaterByLatAndLon = (lat, lon) =>{
    return axios.get(`${baseUrl}lat=${lat}&lon=${lon}&&appid=${apiKey}`)
    .then(response => response.data)
    .catch(error=> console.log(error))
}
const getIcon = (value) =>{
    return `${iconBaseUrl}/${value}@2x.png`
}

export default {getWeaterByLatAndLon, getIcon}