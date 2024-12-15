import React, { useState } from 'react';
import styles from '../styles/ProductPageInfo.module.css';

function ProductPageInfo({ product }) {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <div className={styles.productInfo}>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'Description' ? styles.active : ''}`}
          onClick={() => setActiveTab('Description')}
        >
          Description
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'Specifications' ? styles.active : ''}`}
          onClick={() => setActiveTab('Specifications')}
        >
          Specifications
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'Reviews' ? styles.active : ''}`}
          onClick={() => setActiveTab('Reviews')}
        >
          Reviews
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'Description' && <p>{product.detailed_description}</p>}

        {activeTab === 'Specifications' && (
          <>
            <h3>Available Reproductions</h3>
            <p>{product.available_medium}</p>
            <h3>Sizes</h3>
            <ul>
              {product.sizes.map((sizeObj) => (
                <li key={sizeObj.size}>{sizeObj.size}</li>
              ))}
            </ul>
            <h3>Details</h3>
            <ul>
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </>
        )}

        {activeTab === 'Reviews' && (
          <div>
            {product.reviews.map((review, index) => (
              <div key={index}>
                <h4>{review.name}</h4>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPageInfo;
