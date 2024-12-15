import React from 'react';
import ProductCard from './ProductCard'; 
import '../styles/ProductGrid.css'; 

function ProductGrid({ products, heading }) {
  return (
    <div className="product-grid-container">
      <div className="grid-heading">
        <p>{heading}</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={(id) => console.log(`Clicked product ${id}`)} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;



