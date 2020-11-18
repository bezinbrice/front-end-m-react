import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Icons from '../Icons/Icons'
import './Header.css'
import whiteLogo from'../../assets/img/logo-white.png'
import logo from'../../assets/img/logo.png'

const Header =  () => {

    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
      })

    return (
        <header className="header">
            <div className="header__logo-title">
                { isMobile ?
                <> 
                    <img src={whiteLogo} alt="logo"/> 
                    <h1>BAPE®FRANCE</h1>
                </> : 
                <nav>
                    <ul>
                        <li>E-shop</li>
                        <li>Capsules</li>
                        <li>News</li>
                        <img src={logo} alt="logo" />
                        <li>Lookbook</li>
                        <li>Boutique</li>
                    </ul>
                </nav>
                }
            </div>
            <Icons />
        </header>
    );
}

export default Header;