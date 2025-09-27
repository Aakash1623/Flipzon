import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

    let [loginemail , setLoginemail] = useState("")
    let [loginPass, setLoginPass] = useState("")

    let navigate = useNavigate()


    let handleLogin =async(e)=>{
        e.preventDefault()

        let res = await axios.get("https://flipzon-backend.onrender.com/api/users")
        let users = res.data
        console.log(users)

        let user = users.find((ele)=> ele.userPass ==loginPass && ele.userEmail == loginemail)
        console.log(user)

        if(user)
        {
            alert("login done ")
            navigate("/Dashboard")
        }
        else{
            alert("wrong credentials")
        }
    }

  return (
      <>
    <div className="Signupp">
        <div className="lefty">
             <div className="inner_2">
                <h1>LOGIN</h1>
                <form action="" onSubmit={handleLogin}>
                    <label htmlFor="">Email</label>
                    <input type="email"  placeholder='Enter your Email' value={loginemail} onChange={(e)=>{setLoginemail(e.target.value)}}/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter your password' value={loginPass} onChange={(e)=>{setLoginPass(e.target.value) }}/>
                    <button>Login</button>
                </form>
                <footer>
                    <p>Already have acccount?</p>
                    <NavLink to="/">signup</NavLink>
                </footer>
            </div>
        </div>


        <div className="righty">

            <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?ga=GA1.1.538905533.1750765105&semt=ais_hybrid&w=740" alt="" />
        </div>
    </div>
    </>
  )
}

export default Login