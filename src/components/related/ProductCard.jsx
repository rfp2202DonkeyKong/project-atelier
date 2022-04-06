import React, {useRef} from 'react';
import {CompareButton} from './ActionButtons.jsx';

const ProductCard = ({card, styles, current}) => {
  const actionStyle = {
    right: 0,
    position: 'absolute',
    zIndex: 9,
    color: 'gold',
    width: '25px',
    height: '25px'
  };

  const cardRef = useRef();

  return (
    <div className="product-card">
      <div className="card-top" ref={cardRef}>
        <CompareButton card={card} current={current} />
        <img className="related-image" src={styles[0].photos[0].url ? styles[0].photos[0].url : null} />
      </div>
      <div className="card-bot">
        <span className="related-category">{card.category}</span><br />
        <span className="related-name">{card.name}</span><br />
        <span className="related-price">{card.default_price}</span> <br />
        <span className="related-rating">stars</span>
      </div>

    </div>
  );
};

export default ProductCard;