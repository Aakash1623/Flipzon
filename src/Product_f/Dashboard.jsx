import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom' 
import "./Dashboard.css"
import Dashnav from './Dashnav'

const Dashboard = () => {

const [product,setProduct]=useState([])
const [selectedCategory, setSelectedCategory] = useState("");


let getdata= async()=>{

    let res= await fetch('https://fakestoreapi.com/products')
    let data=await res.json()
    setProduct(data)
}



useEffect(()=>{
    getdata()
},[])


const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
};

const filteredProducts = selectedCategory
    ? product.filter((p) => p.category === selectedCategory)
    : product;

return (
    <>
        <Dashnav />
        <div className="dash">
            <div className="left">
                <div className="profile">
                    <h1>{}</h1>
                </div>

                <div className="select">
                    <div className="s">
                        <select
                            name="Category"
                            id="category"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option className='option' value="" selected>All Categories</option>
                            <option className='option' value="men's clothing">Men's Clothing</option>
                            <option className='option' value="women's clothing">Women's Clothing</option>
                            <option className='option' value="jewelery">Jewelery</option>
                            <option className='option' value="electronics">Electronics</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="right">
                {filteredProducts.map((e) => {
                    return (
                        <div className="profileCard" key={e.id}>
                            <img src={e.image} alt="" />
                            <h3>Product :{e.title.slice(0, 9)}...</h3>
                            <h3>Price : ${e.price}</h3>
                            <h3>rating:{e.rating.rate}</h3>
                            <button>
                                <NavLink to={`${e.id}`}> More info </NavLink>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    </>
);
}

export default Dashboard