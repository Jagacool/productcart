import React from 'react'

const Categories = ({selectedCategories, setCategorie}) =>  {

    const Categories = ['Smartphones', 'Accessories', 'Tablets', 'Wearables', 'Other'];

    return (
        <div className="Categories">
            <h1>Shop App</h1>
            <h3>Sizes</h3>
            <div className="Categorie-list">
                {
                    sizes.map((Categorie, index) => {
                        return (
                            <button 
                                className={ "Categorie" + (selectedCategories.includes(Categorie) ? " selected-Categorie" : "")}
                                key={index}
                                onClick={() => setCategorie(Categorie)}
                            >
                                {Categorie}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories;
