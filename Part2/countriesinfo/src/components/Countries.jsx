import { useEffect, useState } from "react"
import countriesService from '../services/countries'
import weatherService from '../services/weather'
import Weather from './Weather'
const Countries = ({countries,filter, handleCountrySelected}) =>{
    const [country, setCountry] =useState(null)
    const [weather, setWeather] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
        if(countries.length == 1){
            countriesService.getCountry(countries[0]).then(countryData =>{
               
               setCountry(countryData)

                weatherService.getWeaterByLatAndLon(countryData.latlng[0], countryData.latlng[1])
                .then(weatherData => {
                    const weatherDataValue = weatherData
                    setWeather(weatherDataValue)
                  console.log(weatherDataValue)
                }).finally(() =>{
                    setIsLoading(false);
                })
               
            }) 
           
        }
    }, [countries])
    
    if(filter.length>0){
        if(countries.length==1 & country != null){
            return(
               <div className="country-details">
                <h2>{country.name.common}</h2>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
                <ul>
                    {
                    Object.entries(country.languages).map(([key,value]) =>(
                        <li key={key}>{value}</li>
                    ))
                    }
                </ul>

                <img src={country.flags.png} />
                <Weather weatherData={weather} isLoading = {isLoading}/>
               </div>
        )}
        if(countries.length <= 10 & countries.length > 1){
            return(
                <ul>
                {
                  countries.map((c,i) => <li key={i}>{c}<button onClick={() => handleCountrySelected(c)}>Show</button></li>)
                }
              </ul>
            )
        }else if(countries.length>10){
            return <p>To many matches, specify another filter</p>
        } 
        else{
            return <p>There is no country with that name</p>
        }
    }else{
        return(
            <p>Write something to start searching countries</p>
        )
    }
    
}
export default Countries