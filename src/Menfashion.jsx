import React from 'react'
import Wedealin2box from './Wedealinbox'
import Navbar from './Navbar'
import { useState } from 'react'

export default function Menfashion() {
    const [pro,setpro]=useState([
        {name:"Clean White",image:"https://www.fulladdict.com/pub/media/catalog/product/cache/17da9dc9bfc7e1db6d72a94706398e91/p/r/printed-white-t-shirt-brand-name-logo_3.jpg",whereto:"/openitem"},
        {name:"New Levis",image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/8/tr:w-270,/389120aTBH-PRILS-BK_3.jpg?rnd=20200526195200",whereto:"/openitem"},
        {name:"Bear House",image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/c/tr:w-270,/1c4920aTBH-ERICA-GR_1.jpg?rnd=20200526195200",whereto:"/openitem"},
        
      ])  
  return (
    <div>
        <Navbar/>
      <h1 className='pdi'>Men's Fashion</h1>
      <div className='init'>
      {pro.map((deal)=>{
        // console.log("hi");
        return(
          <Wedealin2box naam={deal.name} img={deal.image} whereto={deal.whereto}/>
        )
      })}
      </div>
      
    </div>
  )
}
