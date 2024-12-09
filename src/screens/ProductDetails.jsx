import React from 'react'
import productData from '../data/productData.json'

const ProductDetails = ({ product }) => {
  return (
    <>
      <div>ProductDetails</div>
      {productData.map((product) => {
        <h1>{product.name}</h1>
      })}
      
    </>
  )
}

export default ProductDetails