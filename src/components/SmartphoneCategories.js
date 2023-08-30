import React from 'react';

const SmartphoneCategories = ({ selectedCategories, setCategory }) => {
    const categories = ['Smartphones', 'Accessories', 'Tablets', 'Wearables', 'Other'];

    return (
        <div className="categories">
            <h1>Shop App</h1>
            <h3>Categories</h3>
            <div className="category-list">
                {categories.map((category, index) => {
                    return (
                        <button
                            className={"category" + (selectedCategories.includes(category) ? " selected-category" : "")}
                            key={index}
                            onClick={() => setCategory(category)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SmartphoneCategories;
