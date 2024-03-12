import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import './App.css'
import Countries from './components/Countries'

function App() {
  const [countryNames, setCountryNames] = useState([])
  const [name, setName] = useState('')
  
  const handleChangeInput = (event) => {
    const newName = event.target.value
    setName(newName)
    
  }
  const handleCountrySelected = (name) =>{
    setName(name)
  }
 useEffect(() =>{
  countriesService.getAll()
  .then(data =>{
    setCountryNames(data.map(c=>c.name.common))
  })
 },[])

 const countriesToShow = countryNames.filter(country => country.toUpperCase().startsWith(name.toUpperCase())) 
  return (
    <div>
      <label>find countries <input onChange={handleChangeInput}></input></label>
      
      <Countries countries = {countriesToShow} filter={name} handleCountrySelected={handleCountrySelected}/>
     
    </div>
  )
}

export default App
