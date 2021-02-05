// import
import React from 'react'
import Atsutoku from './img/hot-sale.svg' /* サービスのロゴマーク */
import './css/header.css'
import Mainmenu from './MainMenu'
// import DetailMenu from './DetailMenu';

function Header () {
    return (
        <header className="header">
            <a href="/" className="serviceIcon">
                <img className="header-logo" src={Atsutoku} alt="Atsutoku"/>
                <h1 className="serviceName">AtsuToku</h1>
            </a>
            <div className="menu">
                {/* <DetailMenu /> */}
                <Mainmenu />
            </div>
        </header>
    )
}
export default Header
