import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../mock_api/product_database.json'; 
import ProductPageInfo from '../components/ProductPageInfo'; 
import styles from '../styles/ProductPage.module.css'; 

function ProductPage({ cartItems, updateCart }) { // Accept cartItems and update cart
  const { productId } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const product = products.find((item) => item.id.toString() === productId);

  if (!product) return <div>Product not found</div>; // Handle invalid product

  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.option === selectedOption.option
    );

    let updatedCartItems = [...cartItems];

    if (existingItemIndex !== -1) {
      // If item in cart update quantity instead
      updatedCartItems[existingItemIndex].quantity += quantity;
    } else {
      // Add the new item to the cart
      updatedCartItems.push({
        id: product.id,
        name: product.name,
        option: selectedOption.option,
        price: selectedOption.price,
        quantity,
      });
    }

    updateCart(updatedCartItems); // Update cart
    console.log(`Added ${quantity} x ${product.name} (${selectedOption.option}) to the cart.`);
  };

  return (
    <div className={styles.productPage}>
      {/* Main content */}
      <div className={styles.content}>
        {/* Left flexbox */}
        <div className={styles.imageContainer}>
          <img src={`/product_photos/${product.images.main}`} alt={product.name} className={styles.productImage} />
          <button onClick={() => navigate(-1)} className={styles.backButton}>Back to Shop</button>
        </div>

        {/* this is the right flexbox */}
        <div className={styles.detailsContainer}>
          {/* header */}
          <p className={styles.headerInfo}>
            {product.collection} • {product.series}
          </p>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.mediumYear}>
            {product.original_medium}, {product.year}
          </p>
          <p className={styles.overview}>{product.overview_description}</p>

          <ProductPageInfo product={product} />

          {/* Add to Cart Section */}
          <div className={styles.addToCart}>
            <div className={styles.optionSelector}>
              <label htmlFor="options">Options:</label>
              <select
                id="options"
                value={selectedOption.option}
                onChange={(e) =>
                  setSelectedOption(product.options.find((opt) => opt.option === e.target.value))
                }
              >
                {product.options.map((opt) => (
                  <option key={opt.option} value={opt.option}>
                    {opt.option} - ${opt.price}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.quantitySelector}>
              <label htmlFor="quantity">Quantity:</label>
              <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>

            <div className={styles.totalPrice}>
              Total: ${(selectedOption.price * quantity).toFixed(2)}
            </div>

            <button onClick={handleAddToCart} className={styles.addButton}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;



