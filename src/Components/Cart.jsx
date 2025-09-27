import axios from 'axios'
import { useEffect, useState } from 'react'
import './Cart.css'
import Dashnav from '../Product_f/Dashnav'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [data, setData] = useState([])
  const [deletedId, setDeletedId] = useState(null)

let navigate =useNavigate()
   let previous=()=>{
      navigate(-1)
    }

  const getdata = async () => {
    let response = await fetch(`https://flipzon-backend.onrender.com/item`)
    let res = await response.json()
    setData(res)
  }

  useEffect(() => {
    getdata()
  }, [deletedId])

  let deleteItem = async (id) => {
    await axios.delete(`https://flipzon-backend.onrender.com/item/${id}`)
    alert("Item deleted from cart")
    setDeletedId(id)
  }
  return (
    <>
    <Dashnav/>

      <div className="o">
        <button className='pre' onClick={previous}>Previous</button>
        <div className="i">
          {
            data.map((e) => {
              return (
                <div>
                  <div className="cart" key={e.id}>
                    <div className="l">
                       <img src={e.image} alt={e.title} />
                    </div>
                   <div className="r">
                     <h2>{e.title.slice(0,30)}...</h2>
                    <h3>Price: $ {e.price}</h3>
                    <h3>Rating : {e.rating.rate}</h3>
                    <p>Description :{e.description.slice(0,50)}...</p>

                   </div>
                    <button className='e' onClick={() => deleteItem(e.id)}>Remove</button>
                  </div>
                  
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Cart