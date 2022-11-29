import React from 'react'
import { Link } from 'react-router-dom';
import '../css_styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='logo'>
        <Link to='/'>
            <h1>CryptoExchange</h1>
        </Link>
        </div>

        <div className='login-div'>
            <Link to='/'>
                <button>SignIn</button>
            </Link>

            <Link to='/'>
                <button>SignUp</button>
            </Link>
        </div>


    </div>
  )
}

export default Navbar