import React from 'react'
import { Link } from 'react-router-dom'

export default function Wedealinbox(props) {
  return (
    <>
  
    <div className='mycontainer'>
        <div className="image" style={{backgroundImage:`url(${props.img})`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}></div>
        <div className="name"><Link to={props.whereto}>{props.naam}</Link></div>

      
    </div>
    
    </>

  )
}
