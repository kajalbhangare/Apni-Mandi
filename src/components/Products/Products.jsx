// src/components/ForYou/ForYou.js
import React, { useState, useEffect } from 'react';
import './Products.css';
import { useCartAuth } from '../../hooks/useCartAuth'; // Use the auth-integrated hook

const Products = () => {
  const { addToCart } = useCartAuth(); // This will handle authentication
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Listen for custom search events from the header
  useEffect(() => {
    const handleSearch = (event) => {
      setSearchQuery(event.detail);
      setActiveCategory('all');
    };

    window.addEventListener('headerSearch', handleSearch);
    
    return () => {
      window.removeEventListener('headerSearch', handleSearch);
    };
  }, []);

  const veggies = [
    {
      id: 1,
      name: "Green Peas",
      category: "Fruit Vegetables",
      price: 29,
      originalPrice: 50,
      discount: "42% OFF",
      unit: "500 Gm",
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Fresh green peas, sweet and nutritious. Perfect for curries, soups, and side dishes.",
      nutrition: "Rich in Vitamin K, Vitamin C, and dietary fiber."
    },
    {
      id: 2,
      name: "Green Peas",
      category: "Fruit Vegetables",
      price: 29,
      originalPrice: 50,
      discount: "42% OFF",
      unit: "500 Gm",
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Fresh green peas, sweet and nutritious. Perfect for curries, soups, and side dishes.",
      nutrition: "Rich in Vitamin K, Vitamin C, and dietary fiber."
    },
    {
      id: 3,
      name: "Cauliflower",
      category: "Fruit Vegetables",
      price: 45,
      originalPrice: 60,
      discount: "25% OFF",
      unit: "1 Pc",
      image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Fresh cauliflower, great for roasting, mashing, or making cauliflower rice.",
      nutrition: "High in Vitamin C, Vitamin K, and folate."
    },
    {
      id: 4,
      name: "Bell Pepper",
      category: "Fruit Vegetables",
      price: 35,
      originalPrice: 45,
      discount: "22% OFF",
      unit: "500 Gm",
      image: "https://images.unsplash.com/photo-1563565375092-549683aee6ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Colorful bell peppers, crunchy and sweet. Available in green, red, and yellow.",
      nutrition: "Excellent source of Vitamin C and antioxidants."
    },
    {
      id: 5,
      name: "Tomato",
      category: "Fruit Vegetables",
      price: 22,
      originalPrice: 30,
      discount: "27% OFF",
      unit: "500 Gm",
      image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Juicy red tomatoes, perfect for salads, sauces, and cooking.",
      nutrition: "Rich in lycopene, Vitamin C, and potassium."
    },
    {
      id: 6,
      name: "Fenugreek",
      category: "Leafy Vegetables",
      price: 12,
      originalPrice: 15,
      discount: "20% OFF",
      unit: "Bunch",
      image: "https://images.unsplash.com/photo-1598179265052-4c6bddb0ba76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Fresh fenugreek leaves with a distinct aroma and slightly bitter taste.",
      nutrition: "Good source of iron, fiber, and Vitamin K."
    },
    {
      id: 7,
      name: "Coriander",
      category: "Leafy Vegetables",
      price: 13,
      originalPrice: 18,
      discount: "28% OFF",
      unit: "Bunch",
      image: "https://images.unsplash.com/photo-1592155931583-8b4cce2d3a81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Fresh coriander leaves, also known as cilantro. Adds flavor to many dishes.",
      nutrition: "Contains antioxidants and may help lower blood sugar."
    },
    {
      id: 8,
      name: "Cabbage",
      category: "Fruit Vegetables",
      price: 30,
      originalPrice: 35,
      discount: "14% OFF",
      unit: "1 Pc",
      image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Fresh cabbage, great for salads, coleslaw, and cooking.",
      nutrition: "High in Vitamin K, Vitamin C, and fiber."
    }
  ];

  const fruits = [
    {
      id: 9,
      name: "Apple",
      category: "Fresh Fruits",
      price: 99,
      originalPrice: 120,
      discount: "17% OFF",
      unit: "500 Gm",
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Crisp and sweet apples, perfect for snacking or baking.",
      nutrition: "High in fiber and Vitamin C."
    },
    {
      id: 10,
      name: "Banana",
      category: "Fresh Fruits",
      price: 35,
      originalPrice: 42,
      discount: "17% OFF",
      unit: "Dozen",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      description: "Ripe bananas, naturally sweet and energy-boosting.",
      nutrition: "Rich in potassium, Vitamin B6, and fiber."
    },
    {
      id: 11,
      name: "Orange",
      category: "Fresh Fruits",
      price: 65,
      originalPrice: 78,
      discount: "17% OFF",
      unit: "500 Gm",
      image: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Juicy oranges, bursting with flavor and Vitamin C.",
      nutrition: "Excellent source of Vitamin C and antioxidants."
    },
    {
      id: 12,
      name: "Mango",
      category: "Seasonal Fruits",
      price: 120,
      originalPrice: 145,
      discount: "17% OFF",
      unit: "500 Gm",
      image: "https://images.unsplash.com/photo-1553272725-086100b1f671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Sweet and juicy mangoes, the king of fruits.",
      nutrition: "Rich in Vitamin C, Vitamin A, and folate."
    }
  ];

  // Combine all products
  const allProducts = [...veggies, ...fruits];
  
  // Filter products based on search query
  const filteredProducts = searchQuery 
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory === 'veggies' ? veggies :
      activeCategory === 'fruits' ? fruits :
      allProducts;

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };

  const handleAddToCart = (product, e) => {
    if (e) e.stopPropagation();
    addToCart(product);
  };

  return (
    <section className="for-you py-5">
      <div className="container">
        {/* Category Filter and Search Status */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="category-filter">
                <button 
                  className={`btn ${activeCategory === 'all' ? 'btn-success' : 'btn-outline-success'} me-2`}
                  onClick={() => setActiveCategory('all')}
                >
                  All Products
                </button>
                <button 
                  className={`btn ${activeCategory === 'veggies' ? 'btn-success' : 'btn-outline-success'} me-2`}
                  onClick={() => setActiveCategory('veggies')}
                >
                  Vegetables
                </button>
                <button 
                  className={`btn ${activeCategory === 'fruits' ? 'btn-success' : 'btn-outline-success'}`}
                  onClick={() => setActiveCategory('fruits')}
                >
                  Fruits
                </button>
              </div>
              
              {searchQuery && (
                <div className="search-status">
                  <span className="text-muted">
                    Showing results for: <strong>"{searchQuery}"</strong>
                  </span>
                  <button 
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={clearSearch}
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {filteredProducts.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
              <div className="product-card" onClick={() => openProductDetails(item)}>
                <div className="product-badge">
                  {item.discount && <span className="badge bg-success">{item.discount}</span>}
                </div>
                <div className="product-image">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="img-fluid"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                    }}
                  />
                </div>
                <div className="product-details">
                  <h5 className="product-name">{item.name}</h5>
                  <p className="product-category">{item.category}</p>
                  <div className="product-price">
                    <span className="current-price">₹{item.price}</span>
                    {item.originalPrice > 0 && (
                      <span className="original-price">₹{item.originalPrice}</span>
                    )}
                  </div>
                  <p className="product-unit">{item.unit}</p>
                  <button 
                    className="btn btn-add-to-cart"
                    onClick={(e) => handleAddToCart(item, e)}
                  >
                    <i className="fas fa-shopping-cart me-1"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h4>No products found</h4>
            <p className="text-muted">Try different search terms or browse our categories</p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal fade show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button type="button" className="btn-close" onClick={closeProductDetails}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="img-fluid rounded"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="text-muted">{selectedProduct.category}</p>
                    <div className="d-flex align-items-center mb-3">
                      <h4 className="text-success me-3">₹{selectedProduct.price}</h4>
                      {selectedProduct.originalPrice > 0 && (
                        <h6 className="text-muted text-decoration-line-through">₹{selectedProduct.originalPrice}</h6>
                      )}
                      {selectedProduct.discount && (
                        <span className="badge bg-success ms-2">{selectedProduct.discount}</span>
                      )}
                    </div>
                    <p className="mb-3">{selectedProduct.unit}</p>
                    <p className="mb-3">{selectedProduct.description}</p>
                    <p className="mb-4"><strong>Nutrition:</strong> {selectedProduct.nutrition}</p>
                    <button
                      className="btn btn-success w-100"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      <i className="fas fa-shopping-cart me-2"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;