import React from 'react'
import { Link } from 'react-router'


const PieTile = ({ id, name, image, hours_of_operation, cover_charge }) => {
    return(
      <div className="large-6 columns pie">
        <h2><Link className="pie-name" to={`/pies/${id}`}> {name} </Link></h2>
        <Link to={`/pies/${id}`}><img src={image} alt={name}/></Link>
      </div>
    )
  }

export default PieTile;
