import { NavLink,Navigate } from 'react-router-dom'
import "./Dashnav.css"

import { useNavigate } from 'react-router-dom'

const Dashnav = () => {

  const navigate = useNavigate();
  const logout = () => {
    let logoutuser=JSON.parse(localStorage.getItem("user"))
    // const name = localStorage.getItem("Name");
    // const email = localStorage.getItem("Email");
    // const password = localStorage.getItem("Password");
    // console.log({ name, email, password });
    if (logoutuser != null) {
      localStorage.clear(); // Clear all localStorage to remove any session data
      navigate("/", { replace: true }); // Redirect and replace history to prevent back navigation
      window.location.reload(); // Reload the app to ensure a fresh state
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