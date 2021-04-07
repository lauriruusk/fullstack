import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
      <>
        {props.osa.name} {props.osa.exercises}
      </>    
  )
}

const Content = (props) => {
  const [a, b, c] = props.osat
  return (
    <div>
      <p>
        <Part osa = {a} />
      </p>
      <p>
        <Part osa = {b} />
      </p>
      <p>
        <Part osa = {c} />
      </p>         
    </div>  
  )
}

const Total = (props) => {
  const [a, b, c] = props.osat
  return (
    <div>
      <p>
      Number of exercises {a.exercises + b.exercises + c.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, 
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <>
      <Header course = {course}/>
      <Content osat = {course.parts} />
      <Total osat = {course.parts} />
    </>  
  )
}

export default App;
