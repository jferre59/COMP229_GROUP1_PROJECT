import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './FlowerDetail.css';

const FlowerDetail = () => {
  const location = useLocation();
  const flower = location.state?.flower || {
    name: 'Default Flower',
    price: '$0',
    description: 'No description available.',
    vendor: 'N/A'
  };

  return (
    <div className="flower-detail-page">
      <header className="flower-detail-header">
        <h1>Shop Name</h1>
        <nav className="flower-nav">
          <Link to="/" className="nav-link">Homepage</Link>
          <Link to="/add-flower" className="nav-link">Add Flower</Link>
          <Link to="/profile-management" className="nav-link">View Catalogue</Link>
        </nav>
      </header>
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/category-x">Category X</Link> &gt; {flower.name}
      </div>
      <div className="flower-detail-container">
        <div className="image-section">
          <div className="main-image-placeholder">Box Placeholder</div>
          <div className="thumbnail-container">
            <div className="thumbnail-box">Box</div>
            <div className="thumbnail-box">Box</div>
            <div className="thumbnail-box">Box</div>
          </div>
        </div>
        <div className="info-section">
          <h2>{flower.name}</h2>
          <p className="flower-price">{flower.price}</p>
          <p className="flower-vendor"><strong>Vendor:</strong> {flower.vendor}</p>
          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <select id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <button className="add-to-catalogue-button">Add To Catalogue</button>
          <p className="description">Learn more about our beautiful collection of flowers and their unique characteristics. Discover the perfect bouquet for any occasion.</p>
        </div>
      </div>
      <div className="related-products-section">
        <h3>Related Products</h3>
        <div className="related-products-container">
          <div className="related-product-box">Product</div>
          <div className="related-product-box">Product</div>
          <div className="related-product-box">Product</div>
          <div className="related-product-box">Product</div>
          <div className="related-product-box">Product</div>
        </div>
        <footer className="flower-footer">
          <nav className="footer-nav">
            <span>Shop Name</span>
            <Link to="/category-x" className="nav-link">Category X</Link>
            <Link to="/category-y" className="nav-link">Category Y</Link>
            <Link to="/category-z" className="nav-link">Category Z</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default FlowerDetail;
