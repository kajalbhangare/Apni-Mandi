// src/components/CategoryProducts/CategoryProducts.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CategoryProducts.css';

const CategoryProducts = () => {
  const { categoryName } = useParams();

  // Sample product data for each category
  const categoryProducts = {
    "Root Vegetables": [
      { id: 1, name: "Carrot", price: 40, unit: "500 Gm", image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "20% OFF" },
      { id: 2, name: "Radish", price: 30, unit: "500 Gm", image: "https://images.unsplash.com/photo-1598030751125-4c8a2aec436d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "15% OFF" },
      { id: 3, name: "Potato", price: 25, unit: "1 Kg", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "10% OFF" },
      { id: 4, name: "Onion", price: 35, unit: "1 Kg", image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "12% OFF" }
    ],
    "Leafy Vegetables": [
      { id: 1, name: "Spinach", price: 20, unit: "Bunch", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "25% OFF" },
      { id: 2, name: "Lettuce", price: 30, unit: "Piece", image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "18% OFF" },
      { id: 3, name: "Kale", price: 45, unit: "Bunch", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "30% OFF" },
      { id: 4, name: "Fenugreek", price: 15, unit: "Bunch", image: "https://images.unsplash.com/photo-1598179265052-4c6bddb0ba76?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "20% OFF" }
    ],
    "Fruit Vegetables": [
      { id: 1, name: "Tomato", price: 30, unit: "500 Gm", image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "22% OFF" },
      { id: 2, name: "Cucumber", price: 25, unit: "500 Gm", image: "https://images.unsplash.com/photo-1591177141224-506100f782c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "15% OFF" },
      { id: 3, name: "Bell Pepper", price: 60, unit: "500 Gm", image: "https://images.unsplash.com/photo-1563565375092-549683aee6ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "30% OFF" },
      { id: 4, name: "Eggplant", price: 40, unit: "500 Gm", image: "https://images.unsplash.com/photo-1592415486684-3c32ac2f5e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "18% OFF" }
    ],
    "Exotic Vegetables": [
      { id: 1, name: "Asparagus", price: 150, unit: "500 Gm", image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "10% OFF" },
      { id: 2, name: "Artichoke", price: 200, unit: "Piece", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "12% OFF" },
      { id: 3, name: "Fennel", price: 120, unit: "Bunch", image: "https://images.unsplash.com/photo-1582515078780-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "15% OFF" },
      { id: 4, name: "Romanesco", price: 180, unit: "Piece", image: "https://images.unsplash.com/photo-1604908177523-3f1e6b8f4f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "20% OFF" }
    ],
    "Sprouts": [
      { id: 1, name: "Mung Bean Sprouts", price: 50, unit: "200 Gm", image: "https://images.unsplash.com/photo-1582515078780-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "15% OFF" },
      { id: 2, name: "Alfalfa Sprouts", price: 60, unit: "200 Gm", image: "https://images.unsplash.com/photo-1590080877777-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "10% OFF" },
      { id: 3, name: "Broccoli Sprouts", price: 70, unit: "200 Gm", image: "https://images.unsplash.com/photo-1590080877777-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "12% OFF" },
      { id: 4, name: "Radish Sprouts", price: 55, unit: "200 Gm", image: "https://images.unsplash.com/photo-1590080877777-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "18% OFF" }
    ],
    "Fresh Fruits": [
      { id: 1, name: "Apple", price: 120, unit: "1 Kg", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "15% OFF" },        
      { id: 2, name: "Banana", price: 60, unit: "1 Dozen", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "10% OFF" },   
      { id: 3, name: "Orange", price: 80, unit: "1 Kg", image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "12% OFF" },
      { id: 4, name: "Grapes", price: 150, unit: "500 Gm", image: "https://images.unsplash.com/photo-1510626176961-4bfb1d4f1c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "20% OFF" }
    ],
    "Seasonal Fruits": [
      { id: 1, name: "Mango", price: 200, unit: "1 Kg", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "25% OFF" },
      { id: 2, name: "Lychee", price: 250, unit: "500 Gm", image: "https://images.unsplash.com/photo-1590080877777-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "18% OFF" }, 
      { id: 3, name: "Pineapple", price: 150, unit: "1 Pc", image: "https://images.unsplash.com/photo-1590080877777-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "20% OFF" },  
      { id: 4, name: "Watermelon", price: 40, unit: "1 Kg", image: "https://images.unsplash.com/photo-1590080877777-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "15% OFF" }
    ],
    "Exotic Fruits": [
      { id: 1, name: "Dragon Fruit", price: 300, unit: "1 Pc", image: "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "30% OFF" },
      { id: 2, name: "Starfruit", price: 250, unit: "1 Pc", image: "https://images.unsplash.com/photo-1590080877777-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "22% OFF" }, 
      { id: 3, name: "Rambutan", price: 350, unit: "500 Gm", image: "https://images.unsplash.com/photo-1590080877777-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "25% OFF" },  
      { id: 4, name: "Passion Fruit", price: 200, unit: "1 Pc", image: "https://images.unsplash.com/photo-1590080877777-4c3b1f3b8f4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", discount: "18% OFF" }
    ]
  };

  const products = categoryProducts[categoryName] || [];

  return (
    <section className="category-products py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <Link to="/" className="btn btn-outline-success">
              <i className="fas fa-arrow-left me-2"></i> Back to Home
            </Link>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <h1 className="text-center text-success">{categoryName}</h1>
            <p className="text-center text-muted">Fresh and organic {categoryName.toLowerCase()} directly from farm</p>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                <div className="product-card">
                  <div className="product-badge">
                    {product.discount && <span className="badge bg-success">{product.discount}</span>}
                  </div>
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="img-fluid"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80";
                      }}
                    />
                  </div>
                  <div className="product-details">
                    <h5 className="product-name">{product.name}</h5>
                    <div className="product-price">
                      <span className="current-price">₹{product.price}</span>
                    </div>
                    <p className="product-unit">{product.unit}</p>
                    <button className="btn btn-add-to-cart">
                      <i className="fas fa-shopping-cart me-1"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <h3>No products found for this category</h3>
            <p>Please check back later for new arrivals.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryProducts;