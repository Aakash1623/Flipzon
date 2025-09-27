import { NavLink,Navigate } from 'react-router-dom'
import "./Dashnav.css"

import { useNavigate } from 'react-router-dom'

const Dashnav = () => {

  const navigate = useNavigate();
  const logout = async () => {
    if(logout!=null){

      navigate("/", { replace: true }); 
      window.location.reload(); 
    }
  }

  return (
    <>
    <nav>
     <h1>Flipzon</h1>
    <ul>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Dashboard">Dashboard          </NavLink>
      <NavLink to="/cart">cart</NavLink>
      <NavLink to="/" onClick={logout}>Logout</NavLink>
    </ul>
    </nav>
    </>
  )
}

export default Dashnav