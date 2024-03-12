import weatherService from '../services/weather'
const weather = ({weatherData, isLoading}) =>{
    if (!isLoading){
        return(
            <div className="weather">
            <h3>Weather in {weatherData.name}</h3>
            <p>temperature {weatherData.main.temp} Celsius</p>
            <p>wind {weatherData.wind.speed} m/s</p>
            <img src={weatherService.getIcon(weatherData.weather[0].icon)} alt={weatherData.weather[0].description} />
            </div>
            )
    }
    return (
        <p>Loading weather information... </p>
    )  
}

export default weather