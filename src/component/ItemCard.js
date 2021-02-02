//modules
import React from 'react';
//static assets
import './css/itemCard.css';

export const ItemCard = (props) => {
  const { title, link, img, target, price } = props;
  return (
    <div className="item-card-wrapper">
      <a href={link} target={target} rel="noopener noreferrer">
        <div className="item-card">
          <div className="item-card__img">
            <img src={img} alt="img" />
          </div>
          <div className="item-card__text">
            <div className="item-card__text__inner">
              <p className="item-card__text__title">{title}</p>
              <p className="item-card__text__price">{price}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
