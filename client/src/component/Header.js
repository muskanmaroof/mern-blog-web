
import { Link , useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import Button from "../component/RippleButton";
import './Header.css';
// import { IoHomeSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";



export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/profile', {
      credentials: 'include', 
    }).then(response =>{
      response.json().then(userInfo =>{
        setUserInfo(userInfo);
      })
    })
     
    });// Dependency array to avoid running on every render

  

   function logout(event) {
    event.preventDefault();
     fetch('http://localhost:8080/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setUserInfo(null);
      navigate('/');
    
  }

  function dropdown() {
    const links = document.querySelector('.links');
    links.classList.toggle('show');
  }
  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">EcoBaeuty Bliss</Link>
      <div className='nav-mid'>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <span className='dropdown' onClick={dropdown}><FaAngleDown /></span>
      </div >
      <nav>
        {username ? (
          <>
            <Link to="/create" className='login'>Create new Post</Link>
            <Button onClick={logout} className='signup'>Logout</Button>
          </>
        ) : (
          <div className='log-sign'>
            <Link to="/login" className='login'>Login</Link>
           <Button ripple={"#fff"}> <Link to="/register" className='signup'>Signup</Link></Button>
          </div>
        )}
      </nav>
    </header>
  );
}

