import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product = {} }) {
  const {
    id,
    images = {},
    name = 'Unnamed Product',
    collection = 'Unknown Collection',
    series = 'Unknown Series',
    short_description = 'No description available.',
    available_medium = 'Unknown Medium',
    options = [],
    sizes = [],
    flag = null,
  } = product;

  const navigate = useNavigate(); 

  // get prices and stop the duplication
  const prices = [...new Set(options.map((opt) => opt.price))];
  const displayPrice =
    prices.length > 1
      ? `$${Math.min(...prices)} - $${Math.max(...prices)}`
      : prices.length === 1
      ? `$${prices[0]}`
      : 'Price Unavailable';

  // get sizes
  const sizeList = sizes.map((sizeObj) => sizeObj.size).join(', ');
  const displaySize =
    available_medium === 'Handcrafted'
      ? 'Handcrafted'
      : `${available_medium} ${sizeList}`;

  // images
  const { main } = images;
  const imageUrl = main
    ? `/product_photos/${main}` 
    : '/placeholder.jpg';

  // flags
  const displayFlag = Array.isArray(flag) ? flag.join(', ') : flag;

  const handleClick = () => {
    navigate(`/product/${id}`); 
  };

  return (
    <div
      className={styles.productCard}
      onClick={handleClick} 
      role="button"
      tabIndex={0} 
      onKeyPress={(e) => e.key === 'Enter' && handleClick()} 
    >
      <div className={styles.cardImage}>
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>

      <div className={styles.cardInfo}>
 
        {displayFlag && (
          <div className={styles.cardFlag}>{displayFlag}</div>
        )}
        <h4 className={styles.cardName}>{name}</h4>
        <p className={styles.cardMeta}>
          {collection} • {series}
        </p>
        <p className={styles.cardDescription}>{short_description}</p>
        <p className={styles.cardSize}>{displaySize}</p>
        <p className={styles.cardPrice}>{displayPrice}</p>
      </div>
    </div>
  );
}

export default ProductCard;







