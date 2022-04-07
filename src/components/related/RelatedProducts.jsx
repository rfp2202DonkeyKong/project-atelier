import React, {useEffect, useState} from 'react';
import {getRelatedProductsData} from './RelatedHelpers.js';
import CardCarousel from './CardCarousel.jsx';
import {ProductCard} from './ProductCard.jsx';

const RelatedProducts = ({current}) => {

  const [cards, setCards] = useState([]);

  // TODO: useMemo?
  useEffect(() => {
    getRelatedProductsData(current.id)
        .then((items) => items.map((item, key) =>
        <ProductCard key={key} card={item} current={current} />))
        .then((newCards) => setCards(newCards))
        .catch((err) => {
          console.error(err);
          setCards([]);
        });
  }, [current.id]);

  return (
    <div className="product-list">
      <span>Related Products</span>
      <CardCarousel cards={cards} />
    </div>
  );
}

export default RelatedProducts;