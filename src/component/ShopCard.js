// modules
import React from 'react'
// static assets
import './css/shopCard.css'

export const ShopCard = (props) => {
    const { name, link, img, distance } = props
    return (
        <div className="card-wrapper">
            <a href={link} target="_self" rel="noopener noreferrer">
                <div className="card">
                    <div className="card__img">
                        <img src={img} alt="img" />
                    </div>
                    <div className="card__text">
                        <p className="card__text__shop">{name}</p>
                        <p className="card__text__distance">{distance}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}
