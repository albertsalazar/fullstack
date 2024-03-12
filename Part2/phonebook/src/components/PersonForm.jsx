const PersonForm = (props) =>{

    return (
        <form onSubmit={props.addNewPerson}>
        <div>
        <label>name: <input value={props.newName} onChange={props.handleNameChange} /> </label> 
        <label>phone: <input value={props.newPhone} onChange={props.handlePhoneChange} /></label>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )

}
export default PersonForm