import React, { useState } from 'react'

// const Vote = (props) => {
//   let copy = props.points
//   copy[props.selected] +=1

//   return copy
// }



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  //ohjelman alussa votes-taulukko on tyhjä. tässä alustetaan ko. muuttuja ja annetaan alkioiden alkuarvoksi 0
  //osoittautui turhaksi
  // if(votes === null){
  //   setVotes(new Array(anecdotes.length))
  //   let copy = votes
  //   for(let i=0;i<anecdotes.length;i++){
  //     copy[i] = 0
  //   }

  //   setVotes(copy)
  // }

  //arpoo seuraavan anekdootin
  const nextAnecdote = () => {
      setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  
  //testaa, että taulukko toimii
  console.log(votes)

  //äänestää anekdoottia
  const voter = (props) => {
    let copy = votes
    copy[selected] +=1

    setVotes(copy)
  }

  //seuraa, millä anekdootilla on eniten ääniä, palauttaa sen alkion indeksin, missä on eniten ääniä
  const mostVotes = (props) => {
    let most = 0
    let mosti = 0
    for(let i=0;i<props.length;i++){
      if(props[i]>most){
        most = props[i]
        mosti = i
      }
    }
    return mosti
  }
  //pääohjelma
  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <button onClick = {voter} >vote</button>
        <button onClick = {nextAnecdote}>next anecdote</button>
        <p>
          has {votes[selected]} votes
          {/* console.log(points) */}
        </p>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVotes(votes)]}</p>
        <p>has {votes[mostVotes(votes)]} votes</p>
      </div>
    </div>
    
  )
}

export default App
