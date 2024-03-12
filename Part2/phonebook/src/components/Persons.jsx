
const Persons = ({persons, deletePerson}) =>{

    return(
        <>
        {persons.map(p =><li key={p.name}>{p.name} {p.number} <button onClick={() => deletePerson(p.id)}>Eliminar</button></li>)}
        </>
    )
}
export default Persons