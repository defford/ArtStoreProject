import React from 'react'

const ProductCard = ({ product }) => {
    
    return (
        <>
            <div>
                <img src={product.image} alt={product.name} />
                <h3 className="productCardName">{product.name}</h3>
            </div>
        </>
    )
}

export default ProductCard