import React from 'react'
import Navbar from './Navbar'

export default function Openitem(props) {
    
  return (
    <div>
        <Navbar/>
        <div className="contain">
            <div className="desc">
                <div className="content"><p className='title'>Item : {props.title}</p></div>
                <div className="buy"><button>Buy Now</button></div>
            </div>
            <div className="bigimage" style={{backgroundImage:`url(${props.photo})`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}></div>
        </div>
      
    </div>
  )
}
