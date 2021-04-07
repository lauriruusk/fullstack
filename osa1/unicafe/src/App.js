import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick = {handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value }) => {
  return (
    
      <>
        <td>{text}</td>
        <td>{value}</td>
      </>
    
  )
}

const Statistics = (props) => {

  if (props.all === 0) {
    return (
      <div>
        <p> No feedback given</p>
      </div>
    )
  } else {
    return (
    <div>
      <table>
        <tbody>
          <tr>
          <StatisticLine text = "good" value = {props.g} />
          </tr>
          <tr>
            <StatisticLine text = "neutral" value = {props.n} />
          </tr>
          <tr>
            <StatisticLine text = "bad" value = {props.b} />
          </tr>
          <tr>
            <StatisticLine text = "all" value = {props.all} />
          </tr>
          <tr>
            <StatisticLine text = "average" value = {props.avg} />
          </tr>
          <tr>
            <StatisticLine text = "positive" value = {props.p} />
          </tr>
        </tbody>
        
      </table>
    </div>
  )
  }
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  const all = good + bad + neutral
  const avg = (good + -(bad)) / all
  const pos = 100 * good / all
  return (
    <div>
      <div>
        <h1>Give feedback</h1>
      <Button handleClick = {increaseGood} text = 'Good' />
      <Button handleClick = {increaseNeutral} text = 'Neutral' />
      <Button handleClick = {increaseBad} text = 'Bad' />
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics g = {good} n = {neutral} b = {bad} all = {all} avg = {avg} p = {pos} />
      </div>
    </div>
  )
}

export default App
