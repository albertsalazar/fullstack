const Course = ({course}) =>{
    const total = course.parts.reduce((total,part) => total+part.exercises,0)
    return(
        <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total sum={total} />
      </div>
    )
}
const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ sum }) => <strong><p>Total of {sum} exercises</p></strong>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
  {parts.map(p => <Part key={p.id} part={p} />)}
  </>

export default Course