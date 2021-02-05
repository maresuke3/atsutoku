import React, { useState } from 'react'

import map from './img/map.svg'
import './css/header.css'

export default function DetailMenu () {
    /* shop名をステートで管理しステートからshop名を表示させる */
    const [shop] = useState('選択した店が表示されます')
    //   const shopChange = (event) => {
    //     console.log(shop);
    //   };

    return (
        <div className="detailList">
            <ul className="detail-contents">
                <li className="shopName">{shop}</li>
                <li>
                    <a href="https://www.google.co.jp/maps?hl=ja&tab=rl&authuser=0">
                        <img className="mapbtn" src={map} alt="GoogleMap" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
