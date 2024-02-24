import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVotes] = useState([0,0])
  const handleNext = () =>{
    const numeroAleatorio = Math.floor(Math.random()*8)
    setSelected(numeroAleatorio)
  }
  const handleVote = () =>{
  const newPoints = [...points]
  newPoints[selected] +=1
  setPoints(newPoints)
  const mostVotedValue = Math.max(...newPoints)
  const index = newPoints.indexOf(mostVotedValue)
  setMostVotes([index,mostVotedValue])
  }
  return (
    <div className="container">
      <div className="votation">
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>Has {points[selected]} votes</p>
        <Button onSmash={handleNext} text="Next anecdote" />
        <Button onSmash={handleVote} text="Vote" />
      </div>

      <div className="result">
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVoted[0]]}</p>
        <p>Has {mostVoted[1]} votes</p>
      </div>
    </div>
  );
}
const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>

export default App