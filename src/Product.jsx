import React, { useState } from 'react'
import Navbar from './Navbar'
import Wedealinbox from './Wedealinbox'

export default function Product(props) {

  const [dealin,setdealin]=useState([
    {name:"Men's Fashion",image:"https://img.freepik.com/premium-photo/young-bearded-man-model-fashion-sitting-urban-step-wearing-casual-clothes_1139-1325.jpg",whereto:"/menfashion"},
    {name:"Sports Shoes",image:"https://m.economictimes.com/thumb/msid-102082914,width-480,height-480,resizemode-4,imgsize-32090/branded-sports-shoes-for-men-in-india-from-nike-to-puma.jpg",whereto:"/menfashion"},
    {name:"Watches",image:"https://5.imimg.com/data5/ANDROID/Default/2022/5/HD/FP/FL/33267804/product-jpeg.jpg",whereto:"/menfashion"},
  ])  
  return (
    <div className="box">
      <Navbar/>
      <h1 className='pdi'>Products We Deal In</h1>
      <div className='init'>
      {dealin.map((deal)=>{
        // console.log("hi");
        return(
          <Wedealinbox naam={deal.name} img={deal.image} whereto={deal.whereto}/>
        )
      })}
      </div>
      {/* <Wedealinbox name="Sahayak" image="https://img.freepik.com/premium-photo/young-bearded-man-model-fashion-sitting-urban-step-wearing-casual-clothes_1139-1325.jpg"/> */}

       
        
    </div>
  )
}
