import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {
    const {getTotalCartItem} = useContext(ShopContext);
    const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='' />
            <p> SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'> Shop</Link>  {menu ==="shop" ? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link> {menu ==="Mens" ? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link> {menu ==="Women" ? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link> {menu === 'kids'? <hr/> : <></>}</li>
        </ul>
        <div className='navbar-login-cart'>
            <Link style={{textDecoration:'none'}} to='/login'><button>login</button></Link>
            <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt='' /></Link>
            <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div>
    </div>
  )
}

export default Navbar