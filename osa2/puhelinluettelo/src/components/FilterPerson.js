import React from 'react'

const FilterPerson = ({handleFilter}) => {
    return (
        <div>
            filter shown with <input id="fl2" onChange={handleFilter} ></input><br/><br/>
        </div>
    )
}

export default FilterPerson