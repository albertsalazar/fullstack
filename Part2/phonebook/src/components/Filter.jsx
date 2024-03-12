const Filter = (props) =>{
    return (
        <>
            filter shown with <input value={props.filter} onChange={props.handleChange} />
        </>
    )
   
}
export default Filter