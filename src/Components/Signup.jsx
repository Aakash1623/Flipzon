import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Signup.css'
const Signup = () => {

    let [userName, setUserName] = useState("")
    let [userPass, setUserPass] = useState("")
    let [email , setEmail] = useState("")

     let navigate =   useNavigate()
    let handleSubmit = async (e)=>{
            e.preventDefault()

            let payload = {
                userName : userName,
                userPass : userPass,
                userEmail : email
            }
            try{

            
        await axios.post("https://flipzon-backend.onrender.com/api/users", payload)

            alert("signup done")

            setEmail("")
            setUserName("")
            setUserPass("")

            navigate("/login")
            } catch(err){
                console.error("Signup failed: ",err);

                
            }
    }
  return (
     <>
    <div className="SSignup">
        <div className="Lleft">
             <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?ga=GA1.1.538905533.1750765105&semt=ais_hybrid&w=740" alt="" />
        </div>


        <div className="Rright">

            <div className="inner_1">
                <h1>SIGNUP</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input type="text"  placeholder='Enter your name' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                    <label htmlFor="">Email</label>
                    <input type="email"  placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter your password' value={userPass}  onChange={(e)=>{setUserPass(e.target.value)}}/>
                    <button>Signup</button>
                </form>
                 <footer>
                <p>Already have acccount?</p>
                <NavLink to="/login">Login</NavLink>
                </footer>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup