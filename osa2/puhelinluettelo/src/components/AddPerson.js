import React from 'react'

const AddPerson = ({newPerson, newName, handleNewName, pNum, handleNewPNum}) => {

    return (
    <div>
      <form onSubmit={newPerson}>
        <div>
          Name: <input value={newName} onChange={handleNewName} placeholder="Name here" />
        </div>
        <div>
          Phone: <input value={pNum} onChange={handleNewPNum} placeholder="0401234567" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
)
}

export default AddPerson