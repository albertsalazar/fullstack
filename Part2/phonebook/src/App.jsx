import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import SuccessNotification from './components/SuccessNotification'
import ErrorNotification from './components/ErrorNotification'
const App = () => {

  const [persons, setPersons] = useState([]) 
 
  useEffect(() => {
    personService.getAll()
    .then(data =>{
      setPersons(data)
    })
  },[])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const addNewPerson = (event) =>{
    event.preventDefault()
    const person = persons.find(p => p.name === newName);
    //UPDATE
    if(person){
      const confirm = window.confirm(`${newName} is already added to phonebook, do you want to replace the old number with a new one?`)
      if(confirm){
        const newObject = {...person, number: newPhone }
        personService.update(person.id, newObject)
        .then(data =>{
          setPersons(persons.map(p => p.id !== person.id ? p : data))
          setSuccessMessage(`Phone number updated successfully`)
          setTimeout(() =>{
            setSuccessMessage(null)
          },5000)
        } )
        .catch(error => {
        console.log(`Error updating person with id ${person.id}`, error)
        setErrorMessage(`Error updating phone number for ${person.name}`, error)
        setTimeout(() =>{
          setErrorMessage(null)
        }, 5000)
      })
      }
    }
    //CREATE NEW ONE
    else{
      const personObject = {
        name:newName,
        number: newPhone
      }
      personService.create(personObject)
      .then(data =>{
      setPersons(persons.concat(data))
      setSuccessMessage('New contact added successfully')
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000);
      })
      .catch(error =>{
        setErrorMessage(`Error creating the new contact for ${newName}`, error)
        setTimeout(() =>{
          setErrorMessage(null)
        }, 5000)
      })
    }
    setNewName('')
    setNewPhone('')
  }
  const handleNameChange = (event) =>setNewName(event.target.value)
  const handlePhoneChange = (event) =>setNewPhone(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const deletePerson = id =>{
    const person = persons.find(p => p.id === id)
    const confirm = window.confirm(`Delete ${person.name}?`)
    if(confirm){
      personService.remove(id)
      .then( () =>{
        console.log(`Person with id:${id} deleted succesfully`)
        setPersons(persons.filter(p => p.id !==id))
      })
      .catch(error =>{
        setErrorMessage(`Error deleting contact ${person.name}`, error)
        setTimeout(() =>{
          setErrorMessage(null)
        }, 5000)
      }) 
    }
   
   
  }
  const personsToShow = persons.filter(p => p.name.toUpperCase().startsWith(filter.toUpperCase()))
  return (
    <div>
      <ErrorNotification message={errorMessage} />
      <SuccessNotification message = {successMessage} />
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} addNewPerson={addNewPerson}/>
      
      <h2>Numbers</h2>
      <Persons persons = {personsToShow} deletePerson = {deletePerson}/>
    </div>
  )
}

export default App