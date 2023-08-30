import React, { useState, useEffect } from 'react';
import './App.css';
import SmartphoneCategories from './components/SmartphoneCategories'; // Update the import
import Products from './components/Products';
import Cart from './components/Cart';
import filterList from './components/filterList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]); // Update state name
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(filterList([], null));
    if (JSON.parse(localStorage.getItem('cart'))) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  const setCategory = (category) => {
    const categories = [...selectedCategories]; // Update variable name

    if (categories.includes(category)) {
      const index = categories.indexOf(category);
      categories.splice(index, 1);
    } else {
      categories.push(category);
    }

    setSelectedCategories(categories);
    setProducts(filterList(categories, 'category')); // Update filter parameter
  };

  // Rest of your code remains the same

  return (
    <div className="App">
      <SmartphoneCategories // Update component name
        selectedCategories={selectedCategories} // Update prop name
        setCategory={setCategory} // Update prop name
      />
      <Products products={products} sortProducts={sortProducts} addToCart={addToCart} />
      <Cart products={cart} changeQuantity={changeQuantity} />
    </div>
  );
};

export default App;
