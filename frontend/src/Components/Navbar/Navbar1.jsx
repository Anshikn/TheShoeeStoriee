import logo1 from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import './Navbar1.css'
import { Link } from 'react-router-dom'
import React, { useContext, useRef, useState } from 'react'


const Navbar1 = () => {
  let [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }



  return (
    <>
      <div className='nav1'>
        <Link to='/' onClick={() => { setMenu("shop") }} style={{ textDecoration: 'none' }} className="nav-logo">
          <img className='image1' src={logo1} alt="logo" />
        </Link>


        <div className="nav-login-cart1">

          {localStorage.getItem('auth-token')
            ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }}>Sign Out</button>
            : <Link to='/login' style={{ textDecoration: 'none' }}><button>Sign in</button></Link>}
          {/* <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div> */}
        </div>
      </div>

    </>
  )
}
export default Navbar1