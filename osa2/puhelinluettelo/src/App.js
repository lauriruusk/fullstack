import React, { useState, useEffect } from 'react'

import AddPerson from './components/AddPerson'
import PrintPerson from './components/PrintPerson'
import FilterPerson from './components/FilterPerson'
import persondata from './services/persondata'
// import { render } from '@testing-library/react'

const Notification = ({message}) => {
  //console.log(message)
  if(message === null) {
    return null
  }

  return (
    <div id="error" className="error" >
      {message}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ pNum, setPNum ] = useState('')
  const [ filtr, setFiltr ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('default')
  const [ luokka, setLuokka ] = useState('')
  const id = 'error'
  // let messageTemp = 'placeholder'
  
  //hakee alkutiedot palvelimelta
  useEffect(() => {
    persondata
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  // Lisää henkilön tiedot. Mikäli nimi on jo tallennettu, ohjelma ei hyväksy
  const newPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName, number: pNum
    }

    // tarkistaa onko nimi jo luettelossa
    if (persons.some((e) => e.name.toLowerCase() === personObject.name.toLowerCase())) {
      // jos nimi on luettelossa, kysyy päivitetäänkö numero
      if (window.confirm(`${newName} is already in phonebook, replace the old number with a new one?`)) {
        let oldPersonTemp = persons.find(p => p.name.toLowerCase() === personObject.name.toLowerCase())
        let newPersonTemp = {...personObject, pNum}
        persondata
          .update(oldPersonTemp.id, newPersonTemp)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== oldPersonTemp.id ? person : updatedPerson))
          })
          .catch(error => {
            setErrorMessage(`${newName} already exists`)
          })
          setErrorMessage(`${newName} updated successfully`)
        setLuokka("success")
        // console.log(luokka)
        content({id, luokka, errorMessage} )
      }
    } else {
      // jos nimeä ei ole luettelossa, lisää sen
      persondata
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))})
          setErrorMessage(`${newName} added successfully`)
        setLuokka("success")
        // console.log(luokka)
        // content({id, luokka, errorMessage} )
        setNewName('')
        setPNum('')
    }
  }

  // käsittelijät nimelle, puhelinnumerolle ja filtterille
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPNum = (event) => {
    setPNum(event.target.value)
  }

  const handleFilter = (event) => {
    setFiltr(event.target.value)
  }

  // poistaa henkilön
  const handleDel = (person) => {
    if(window.confirm('Are you sure?')) {
      persondata
      .del(person.id)
      .then(removedPerson => {setPersons(persons.filter(p => p.id!==person.id))})
      setErrorMessage(`${person.name} deleted successfully`)
      setLuokka("failure")
      content({id, luokka, errorMessage} )
    }
  }

  // vaihtaa virheilmoituksen luokkaa. Tarkoitus oli saada luokkaa vaihtamalla ilmoituksille eri tyylit. en kuitenkaan saanut toimimaan halutulla tavalla.
  // Menin jopa niin pitkälle että etsin muiden palautuksia aiheesta. Vaikuttaisi ettei olennaista eroa ole.
  // tästä erityisesti toivoisin palautetta, olisi hyvä tietää mikä meni pieleen
  const content = ({id, luokka, message}) => {
    let temp = document.querySelector("#" + id )
    let luokkaTemp = luokka
    temp.className = luokkaTemp
    temp.message = message
    console.log(temp.message)
    //setErrorMessage(message)
    console.log(temp)
    // window.location.reload(false)

    // kloonaa vanhan luokan ja korvaa vanhan uudella
    let elm = temp
    let newelm = elm.cloneNode(true)
    // console.log(newelm)
    elm.parentNode.replaceChild(newelm, elm)
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <FilterPerson handleFilter={handleFilter} />
      <AddPerson newPerson = {newPerson} handleNewName = {handleNewName} handleNewPNum = {handleNewPNum}
       newName = {newName} pNum = {pNum} />
      <h2>Numbers</h2>
      <div>
          <PrintPerson filtr={filtr} persons={persons} hDel={handleDel} /> 
      </div>
    </div>
  )
}

export default App