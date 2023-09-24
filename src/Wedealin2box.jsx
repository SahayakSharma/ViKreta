import React from 'react'
import { Link } from 'react-router-dom'
import Openitem from './Openitem'

export default function Wedealinbox(props) {
    
    const handleclick=()=>{
        
       
        return(
            <div>
                <Openitem title={props.naam} photo={props.img}/>
            </div>
        )
    }
  return (
    <>
  
    <div className='mycontainer'>
        <div className="image" style={{backgroundImage:`url(${props.img})`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}></div>
        <div className="name"><Link onClick={handleclick} >{props.naam}</Link></div>

      
    </div>
    
    </>

  )
}
