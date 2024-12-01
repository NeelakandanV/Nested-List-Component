import React, { useState } from 'react'
import { ListData } from './data'

function NestedList() {
    const carList = ListData;
    const [data,setData] = useState(null)
    const[model,setModel] = useState(null);
    const[variant,setVariant] = useState(null)
    const[color,setColor] = useState(null)
    // For Open and Close
    const [open,setOpen] = useState(false)

    const getBrand = document.querySelector(".Brand")
    const getModel = document.querySelector(".Model")
    const getVariant = document.querySelector(".Variant")
    const getColor = document.querySelector(".Color")

    // Selecting Car
    const handleCarClick =()=>{
      if(open){
        setData(null)
        setModel(null)
        setVariant(null)
        setColor(null)
      }else{
        setData(carList)
      }
      getBrand.classList.toggle("showBrand")
      getModel.classList.remove("showModel")
      getVariant.classList.remove("showVariant")
      getColor.classList.remove("showColor")
      setOpen(!open)
    }

    // Selecting a Brand
    const handleBrandClick = (Id)=>{
      const CarBrand = data.filter(val=>val.id===Id)
      // console.log(CarBrand[0])
      setModel(CarBrand[0].Models)
      setVariant(null)
      setColor(null)
      getModel.classList.add("showModel")
      getVariant.classList.remove("showVariant")
      getColor.classList.remove("showColor")
    }

    // Selecting a Model
    const handleModelClick = (carName)=>{
      const carModel = model.filter(val=>val.Name===carName)
      //console.log(carModel[0].Variants_Available)
      setVariant(carModel[0].Variants_Available)
      setColor(null)
      getVariant.classList.add("showVariant")
      getColor.classList.remove("showColor")
    }

    // Selecting a Variant
    const handleVariantClick = (carType)=>{
      const carVariant = variant.filter(val=>val.Variant===carType)
      //console.log(carVariant[0].Color)
      setColor(carVariant[0].Color)
      getColor.classList.add("showColor")
    }



  return (
    <div className='MainParent'>
        <div className='Title'>
          <h1>Nested List Component</h1>
        </div>
        
        <div className='NavContent'>
          <span onClick={()=>{handleCarClick()}}>Select Your Car 🔽</span>
          
          <div className='Brand'>
            {data ? data.map((list,idx)=>(
              <p key={idx}  onClick={()=>handleBrandClick(list.id)}>{list.Brand} &#11208;</p>
            ))
            :""}
          </div>

          <div className='Model'>
            {model ? model.map((mod,idx)=>(
              <p key={idx} onClick={()=>handleModelClick(mod.Name)}>{mod.Name} &#11208;</p>
            )):""}
          </div>

          <div className='Variant'>
            {variant ? variant.map((varit,idx)=>(
              <p key={idx}  onClick={()=>handleVariantClick(varit.Variant)}>{varit.Variant} &#11208;</p>
            )):""}
          </div>

          <div className='Color'>
            {color ? color.map((col,idx)=>(
              <p key={idx} >{col}</p>
            )):""}
          </div>
        </div>
    </div>
  )
}

export default NestedList