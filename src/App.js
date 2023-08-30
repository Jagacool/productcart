import React, { useState, useEffect } from 'react';
import './App.css';
import SmartphoneCategories from './components/SmartphoneCategories';
import Products from './components/Products';
import Cart from './components/Cart';
import filterList from './components/filterList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(filterList([], null));
    if (JSON.parse(localStorage.getItem('cart'))) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  const setCategory = (category) => {
    const categories = [...selectedCategories];
    if (categories.includes(category)) {
      const index = categories.indexOf(category);
      categories.splice(index, 1);
    } else {
      categories.push(category);
    }
    setSelectedCategories(categories);
    setProducts(filterList(categories, 'category'));
  };

  const sortProducts = (method) => {
    const array = [...products]; // Make a copy of the products array

    if (method === 'Lowest to Highest') {
      array.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (method === 'Highest to Lowest') {
      array.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    setProducts(array);
  };

  const addToCart = (item) => {
    const productList = [...cart];
    // Rest of your addToCart logic
  };

  const changeQuantity = (item, e) => {
    const productList = [...cart];
    // Rest of your changeQuantity logic
  };

  return (
    <div className="App">
      <SmartphoneCategories
        selectedCategories={selectedCategories}
        setCategory={setCategory}
      />
      <Products products={products} sortProducts={sortProducts} addToCart={addToCart} />
      <Cart products={cart} changeQuantity={changeQuantity} />
    </div>
  );
};

export default App;
