import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SectionTabs from '../components/SectionTabs';
import SortMenu from '../components/SortMenu';
import ProductGrid from '../components/ProductGrid';
import '../styles/Shop.css';

function Shop() {
  const [activeTab, setActiveTab] = useState('All'); // Default to all
  const [sortOption, setSortOption] = useState('Price Low to High'); // Default sort
  const [products, setProducts] = useState([]); // all product data
  const [filteredProducts, setFilteredProducts] = useState([]); 

  // get products from the mock server
  useEffect(() => {
    fetch('/mock_api/product_database.json') 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  // Update filtered products when activeTab or sortOption changes
  useEffect(() => {
    let filtered = products;
  
    // Filtering 
    if (activeTab === 'Seasonal Collection') {
      filtered = products.filter((product) => product.collection === 'Seasonal Collection');
    } else if (activeTab === 'Newfoundland Christmas Series') {
      filtered = products.filter((product) => product.series === 'Newfoundland Christmas Series');
    } else if (activeTab === 'Mummers Series') {
      filtered = products.filter((product) => product.series === 'Mummers Series');
    } else if (activeTab === 'Prints') {
      filtered = products.filter((product) => product.available_medium.includes('Print'));
    } else if (activeTab === 'Originals') {
      filtered = products.filter((product) => product.available_medium.includes('Original'));
    } else if (activeTab === 'Handcrafted') {
      filtered = products.filter((product) => product.available_medium.includes('Handcrafted'));
    } else if (['8x8', '8x10', '12x12', '11x14', '16x20'].includes(activeTab)) {
      // Filter by size
      filtered = products.filter((product) =>
        product.sizes.some((sizeObj) => sizeObj.size === activeTab)
      );
    }
  
    // Sorting 
    if (sortOption === 'Price High to Low') {
      filtered.sort((a, b) => {
        const lowestPriceA = Math.min(...a.options.map((opt) => opt.price));
        const lowestPriceB = Math.min(...b.options.map((opt) => opt.price));
        return lowestPriceA - lowestPriceB;
      });
    } else if (sortOption === 'Price Low to High') {
      filtered.sort((a, b) => {
        const highestPriceA = Math.max(...a.options.map((opt) => opt.price));
        const highestPriceB = Math.max(...b.options.map((opt) => opt.price));
        return highestPriceB - highestPriceA;
      });
    } else if (sortOption === 'Size Large to Small') {
      filtered.sort((a, b) => {
        const smallestSizeA = Math.min(...a.sizes.map((sizeObj) => {
          const [width, height] = sizeObj.size.split('x').map(Number);
          return width;
        }));
        const smallestSizeB = Math.min(...b.sizes.map((sizeObj) => {
          const [width, height] = sizeObj.size.split('x').map(Number);
          return width;
        }));
    
        if (smallestSizeA !== smallestSizeB) {
          return smallestSizeA - smallestSizeB; 
        }
    
        const smallestHeightA = Math.min(...a.sizes.map((sizeObj) => {
          const [_, height] = sizeObj.size.split('x').map(Number);
          return height;
        }));
        const smallestHeightB = Math.min(...b.sizes.map((sizeObj) => {
          const [_, height] = sizeObj.size.split('x').map(Number);
          return height;
        }));
        return smallestHeightA - smallestHeightB; 
      });
    } else if (sortOption === 'Size Small to Large') {
      filtered.sort((a, b) => {
        const largestSizeA = Math.min(...a.sizes.map((sizeObj) => {
          const [width, height] = sizeObj.size.split('x').map(Number);
          return width;
        }));
        const largestSizeB = Math.min(...b.sizes.map((sizeObj) => {
          const [width, height] = sizeObj.size.split('x').map(Number);
          return width;
        }));
    
        if (largestSizeA !== largestSizeB) {
          return largestSizeB - largestSizeA; 
        }
    
        const largestHeightA = Math.min(...a.sizes.map((sizeObj) => {
          const [_, height] = sizeObj.size.split('x').map(Number);
          return height;
        }));
        const largestHeightB = Math.min(...b.sizes.map((sizeObj) => {
          const [_, height] = sizeObj.size.split('x').map(Number);
          return height;
        }));
        return largestHeightB - largestHeightA; 
      });
    }
    
  
    setFilteredProducts(filtered);
  }, [activeTab, sortOption, products]);
  
  

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <Header title="Our Store" subtitle="Explore a world of prints and original pieces." />


      <div className="shop-controls">
         <div className="shop-left">
        </div>
        <div className="shop-middle">
          <SectionTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="shop-right">
          <SortMenu sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div>
      <div className="shop-info">
        <p className="subheading">
          Showing {activeTab} from {sortOption}
        </p>
      </div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default Shop;


