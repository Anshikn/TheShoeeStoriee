import React, { useContext, useRef, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import nike from '../Assets/nike1.png'
import adidas from '../Assets/adidas.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

  let [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    //store
    <div className='nav'>
      {/* <Link to='/' onClick={() => { setMenu("shop") }} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>storee</p>

      </Link> */}
      <Link to='/' onClick={() => { setMenu("shop") }} style={{ textDecoration: 'none' }} >
        <p className='p1'>The Shoee Storiee</p>
      </Link>


      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />


      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>

        <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>

        <li onClick={() => { setMenu("womens") }}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>

        <li onClick={() => { setMenu("boy") }}><Link to='/boy' style={{ textDecoration: 'none' }}>Boys</Link>{menu === "boy" ? <hr /> : <></>}</li>

        <li onClick={() => { setMenu("girl") }}><Link to='/girl' style={{ textDecoration: 'none' }}>Girls</Link>{menu === "girl" ? <hr /> : <></>}</li>

        <li onClick={() => { setMenu("nike") }}><Link to='/nike' style={{ textDecoration: 'none' }}><img className='nikeimg' src={nike}></img> </Link>{menu === "nike" ? <hr /> : <></>}</li>

        <li onClick={() => { setMenu("adidas") }}><Link to='/adidas' style={{ textDecoration: 'none' }}><img className='nikeimg' src={adidas}></img> </Link>{menu === "adidas" ? <hr /> : <></>}</li>

        {/* <li onClick={() => { setMenu("about") }}><Link to='/about' style={{ textDecoration: 'none' }}>About</Link>{menu === "about" ? <hr /> : <></>}</li>

        <li onClick={() => { setMenu("contact") }}><Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link>{menu === "contact" ? <hr /> : <></>}</li> */}

      </ul>
      <div className="nav-login-cart">

        {/* {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }}>Logout</button>
          : <Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>} */}

        {/* <SearchBar /> */}

        <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

    </div>
  )
}

export default Navbar
