// import
import React, { useState } from 'react';
// import {Link} from 'react-router-dom'; /* ルーティング時に使用するLinkをReactRouterよりインポート */
import Atsutoku from './img/hot-sale.svg'; /* サービスのロゴマーク */
import "./css/header.css";
import Mainmenu from './MainMenu';

function Header() {
    
    // 機能

    return(
        <header className="header">
            <div className="serviceIcon">
                <img className="header-logo" src={Atsutoku} alt="Atsutoku"/>
                <h1 className="serviceName">AtsuToku</h1>
            </div>
            <div className="menu">
                <Mainmenu />
            </div>
        </header>
    );
}
export default Header;