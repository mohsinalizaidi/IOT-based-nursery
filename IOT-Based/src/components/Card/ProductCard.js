import React from 'react';

const ProductCard = ({ title, image, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
};

export default ProductCard;
