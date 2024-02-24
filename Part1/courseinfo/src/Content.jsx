import Part from "./Part"

const Content = (props) =>{
    return (
        <>
         <Part part={props.parts[0].name} exercise={props.parts[0].exercise} />
         <Part part={props.parts[1].name} exercise={props.parts[1].exercise} />
         <Part part={props.parts[2].name} exercise={props.parts[2].exercise} />
        </>
    )
}

export default Content