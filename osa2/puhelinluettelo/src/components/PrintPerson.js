import React from 'react'

const PrintPerson = ({persons, filtr, hDel}) => {
    return (

        <div>
            {persons.filter(person => person.name.toLowerCase().includes(filtr)).map(p =>
            <p key={p.name}>{p.name} {p.number} <button onClick={() => hDel(p)} >delete</button></p>)}
        </div>
        
    )
    
}

export default PrintPerson