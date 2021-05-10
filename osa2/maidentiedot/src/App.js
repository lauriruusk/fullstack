import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import countrydata from './services/countrydata'

const App = () => {
  const [filtr, setFiltr ] = useState()
  const [ maat, setMaat ] = useState([])
  const [ show, setShow ] = useState(false)
  const [ yxMaa, setYxMaa ] = useState()
  const [ saa, setSaa ] = useState([])
  // const REACT_APP_WEATHER_KEY
  // const dataTemp = data
  // console.log(data)

  

  useEffect(() => {
    countrydata.getAll().then(countries => setMaat(countries))
  }, [])

  console.log(maat)
  const handleFilter = (event) => {
    setFiltr(event.target.value)
  }

  const handleVisibility = ({m}) => {

    console.log(m)
    setYxMaa(m)
    console.log(yxMaa)
    setShow(!show)
    // saaTiedotus(m.capital)
  }

  // const saaTiedotus = ({query}) => {
  //   setSaa(countrydata.getWeather(process.env.REACT_APP_KEY, {query}))
  // }

  const Countries = ({show, handleVisibility, ymaa, maat}) => {
    if(show===false) {
      return (
        maat.filter(mt => mt.name.toLowerCase().includes(filtr))
          .map((m, i) => {
            return (
              <div key={i} >
                  <p>{m.name}<button onClick={() => handleVisibility({m}) } >show</button></p>
                </div>
            )      
              })
      )
    } else {
      return (
        <div className="cntry" >
          <h2>{ymaa.name}</h2>
          <p>Capital {ymaa.capital}</p>
          <p>Population {ymaa.population}</p>
          <h2>Languages</h2>
          <ul>
            {ymaa.languages.map((l, j) => {
              return (
                <li key={j}>{l.name}</li>
              )
            })}
          </ul>
          <img src={ymaa.flag} alt={ymaa.name} style={{width: '25%'}} />
          {/* <h2>Weather in {ymaa.capital}</h2>
          <p>Temperature: {saa.current.temperature}</p>
          <p>Wind: {saa.current.wind_speed} </p> */}
        </div>
      )
    }
  }
  
  return (
    <div>
      <Filter handleFilter={handleFilter} /><br/>
      <div className="countries">
        <Countries show={show} handleVisibility={ handleVisibility} ymaa={yxMaa} maat={maat} saa={saa}  />
        
            {/* alla vanha koodi. sama sisältö kuin Countries-funktiolla, ei vain onnistunut saamaan yksittäistä maata näkymään ilman erillistä funktiota */}

            {/* {() => {if(show === false){
              return (
                maat.filter(mt => mt.name.toLowerCase().includes(filtr))
                .map((m, i) => {
                      <div key={i} >
                        <p>{m.name}<button onClick={() => handleVisibility({m}) } >show</button></p>
                      </div>
                    }))
            } else {
              return (
                <div className="cntry" >

                <h2>{yxMaa.name}</h2>
                <p>Capital {yxMaa.capital}</p>
                <p>Population {yxMaa.population}</p>
                <h2>Languages</h2>
                <ul>
                  {yxMaa.languages.map((l, j) => {
                    return (
                      <li key={j}>{l.name}</li>
                    )
                  })}
                </ul>
                <img src={yxMaa.flag} alt={yxMaa.name} style={{width: '25%'}} />
                </div>
              )
            }
              
              
            }
          }
         */}
      </div>
    </div>
  )
}

export default App
