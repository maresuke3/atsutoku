import React, { Component } from 'react';
import './card.css';
import Matsuya from './img/matsuya.gif';
import Donut from './img/donut.jpg';
import Bookoff from './img/bookoff.jpg';
import Second from './img/second.jpg';
import Uniqlo from './img/uniqlo.png';
import Sukiya from './img/sukiya.png';
import Wego from './img/wego.png';
import Earth from './img/earth.jpg';
import GU from './img/GU.png';

let data = [
    {img: Matsuya, alt:'matsuya', shop:'松屋金沢工大前店', distance:0.3},
    {img: Donut, alt:'donut', shop:'ミスタードーナツ野々市ショップ', distance:1.9},
    {img: Bookoff, alt:'bookoff', shop:'BOOKOFF野々市若松店', distance:1.9},
    {img: Second, alt:'second', shop:'セカンドストリート野々市本町店', distance:2.4},
    {img: Uniqlo, alt:'uniqlo', shop:'ユニクロ野々市店', distance:4.0},
    {img: Sukiya, alt:'sukiya', shop:'すき家野々市新庄店', distance:4.3},
    {img: Wego, alt:'wego', shop:'WEGO 金沢フォーラス店', distance:6.7},
    {img: Earth, alt:'earth', shop:'アースミュージック＆エコロジー 金沢フォーラス店', distance:6.7},
    {img: GU, alt:'GU', shop:'GU イオンタウン金沢示野店', distance:8.3}
];

class Card extends Component {
    render() {
        return (       
            <div className="container">
                {data.map((value) =>(
                    <div className="card-wrapper">
                        <a href="#">
                            <div className="card">
                                <div className="card__img">
                                    <img src={value.img} alt={value.alt} />
                                </div>
                                <div className="card__text">
                                    <p className="card__text__shop">{value.shop}</p>
                                    <p className="card__text__distance">{value.distance}km</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    ))}   
            </div>          
        )
    }
}

export default Card;