import React from 'react'
import { useMediaQuery } from 'react-responsive'

import './Icons.css'
import whiteSearch from '../../assets/icons/search-white.png'
import whiteCart from '../../assets/icons/cart-white.png'
import whiteBurger from '../../assets/icons/hamburger-white.png'
import account from'../../assets/icons/Account.png'
import cart from'../../assets/icons/Cart.png'
import hamburger from'../../assets/icons/Hamburger.png'
import search from'../../assets/icons/Search.png'

const Icons = () => {

    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
      })

    return (
        <nav className="header__icons">
            { isMobile ? <>
                <img src={whiteSearch} alt="icone recherche"/>
                <img src={whiteCart} alt="bouton recherche" />
                <img src={whiteBurger} alt="bouton burger"/>
            </> : <>
                <img src={account} alt="icone compte" />
                <img src={cart} alt="icone cart"/>
                <img src={hamburger} alt="bouton burger"/>
                <img src={search} alt="bouton recherche" />
            </>}
            
        </nav>
    );
}

export default Icons;