import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import "./Productdetails.css"
import axios from 'axios'

const Productdetails = () => {
  let params=useParams()

    let [product,setproduct]=useState([])

    let navigate =useNavigate()

    let previous=()=>{
      navigate(-1)
    }

    let {did}=params
   
    let getdata=async()=>{
        let data=await fetch(`https://fakestoreapi.com/products/${did}`)
        let res=await data.json()
        setproduct(res)
    }

let addcart=async()=>{

  let {id,...rest}=product

  await axios.post("https://flipzon-backend.onrender.com/api/item",rest)
  alert("added to cart")

}

    useEffect(()=>{
       getdata()
    },[did])
  return (
    <div className="dout">
      <button className="pre" onClick={previous}>Previous</button>
      <div className="din">
    <div className='display'>
        <img src={product.image} alt="" />
       <h2>Title :{product .title}</h2>
       <h3>Price : ${product.price}</h3> 
       <p><b>Description :</b>{product.description}</p> 
       <button className='cp' onClick={()=>addcart(product)}>Add to cart</button>
    </div>
    </div>
    </div>
  )
}

export default Productdetails