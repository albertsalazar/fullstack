import { useState } from 'react'


function App() {

  const [goodCounter, setGoodCounter] = useState(0)
  const [neutralCounter, setNeutralCounter] = useState(0)
  const [badCounter, setBadCounter] = useState(0)
  const [allCounter, setAllCounter] = useState(0)
  const [averageCounter, setAverageCounter] = useState(0)
  const [positivePercentage, setPositivePercentage ] = useState('0 %')

  const sendFeedback = (feedbackType) =>{
    let good = goodCounter
    let neutral = neutralCounter
    let bad = badCounter
    switch(feedbackType){
      case 'good':
        good = goodCounter+1
        setGoodCounter(good)
        break;
      case 'neutral':
        neutral = neutralCounter+1
        setNeutralCounter(neutral)
        break;
      default:
        bad = badCounter+1
        setBadCounter(bad)
  }
    const all = allCounter+1
    setAllCounter(all)
    const average = ((good - bad)/all).toFixed(2)
    setAverageCounter(average)
    setPositivePercentage(`${((good/all)*100).toFixed(2)} %`)
  }
  return (
    <>
    <div className='feedback'>
    <h1>give feedback</h1>
    <Button handleClick = {() => sendFeedback('good')} text='good'></Button>
    <Button handleClick = {() => sendFeedback('neutral')} text='neutral'></Button>
    <Button handleClick = {() => sendFeedback('bad')} text='bad'></Button>
    </div>
    <div className='statistics'>
    <h1>statistics</h1>
    <Statistics goodCounter = {goodCounter} neutralCounter={neutralCounter}
    badCounter={badCounter} allCounter={allCounter}
    averageCounter={averageCounter}
    positivePercentage={positivePercentage}/>
    </div>
    </>
  )
    
}
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Statistic = ({text, counter}) => <tr><td>{text}</td> <td>{counter}</td></tr>
const Statistics = ({goodCounter, neutralCounter, badCounter, allCounter, averageCounter, positivePercentage}) =>{
  if (allCounter>0){
    return(
      <>
      <table>
        <Statistic text='good' counter={goodCounter} />
        <Statistic text='neutral' counter={neutralCounter} />
        <Statistic text='bad' counter={badCounter} />
        <Statistic text='all' counter={allCounter} />
        <Statistic text='average' counter ={averageCounter} />
        <Statistic text='positive' counter={positivePercentage} />
      </table>
      </>)
  }else{
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }
  
  
  
 
}
export default App
