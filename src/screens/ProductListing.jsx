import React from 'react'
import ProductCard from '../components/ProductCard'
import productData from '../data/productData.json'

const ProductListing = () => {
const [showDetails, setShowDetails] = React.useState(false);

return (
    <>
        <div>ProductListing</div>
        {productData.map((product) => (
            <ProductCard key={product.productid} product={product} />
            
        ))}
        
        <img
            src="https://via.placeholder.com/150"
            alt="Sample Product"
            onClick={() => setShowDetails(true)}
            />

        {showDetails && <ProductDetails />}
    </>
)
}

export default ProductListing