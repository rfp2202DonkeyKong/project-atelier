import React, {useContext} from 'react';
import ProductCard from './ProductCard.jsx';
import AddProductCard from './AddProductCard.jsx';
import {OutfitContext} from './OutfitList.jsx';
import {RelatedContext} from './RelatedProducts.jsx';

const RelatedCards = function RelatedCards() {
  const {relatedList} = useContext(RelatedContext);

  return (
  <div className="carousel"> {/* The part that scrolls when you press a button */}
    {relatedList.map((id) => <ProductCard key={id} product_id={id} related={true} />)}
  </div>
  );
};

const OutfitCards = function OutfitCards() {
  const {outfitList, setOutfitList} = useContext(OutfitContext);

  return (
    <div className="carousel"> {/* The part that scrolls when you press a button */}
      {[<AddProductCard key={"addproductcard"} setOutfitList={setOutfitList} />]
      .concat(outfitList.map((id) => <ProductCard key={id} product_id={id} related={false}  />))}
    </div>
  );
};

export {RelatedCards, OutfitCards};