import React from 'react'

const Filter = ({handleFilter}) => {
    return (
    <div className="filter">
        Find countries <input className="finput" onChange={handleFilter} />
    </div>
)
}


export default Filter