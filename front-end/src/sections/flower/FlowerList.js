import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FlowerList.css';

const FlowerList = () => {
    const navigate = useNavigate();

    const flowers = [
        { id: 1, name: 'Rose', price: '₩10,000', image: 'rose.jpg', vendor: 'Street Gear', stock: 0 },
        { id: 2, name: 'Tulip', price: '₩12,000', image: 'tulip.jpg', vendor: 'CityWear', stock: 20 },
        { id: 3, name: 'Daisy', price: '₩15,000', image: 'daisy.jpg', vendor: 'UrbanTrend', stock: 100 },
        { id: 4, name: 'Chrysanthemum', price: '₩8,000', image: 'chrysanthemum.jpg', vendor: 'DenimWorks', stock: 50 },
        { id: 5, name: 'Sunflower', price: '₩12,000', image: 'sunflower.jpg', vendor: 'SockVault', stock: 150 },
        { id: 6, name: 'Lily', price: '₩18,000', image: 'lily.jpg', vendor: 'WrapUp', stock: 80 },
        { id: 7, name: 'Orchid', price: '₩20,000', image: 'orchid.jpg', vendor: 'FloristHub', stock: 300 },
        { id: 8, name: 'Marigold', price: '₩25,000', image: 'marigold.jpg', vendor: 'BloomSpace', stock: 150 }
    ];

    const handleCardClick = (flower) => {
        navigate('/profile-management/flower-detail', { state: { flower } });
    };

    return (
        <div className="flower-list-page">
            <header className="flower-list-header">
                <h1>Flowers Catalogue</h1>
                <nav className="flower-nav">
                    <a href="/" className="nav-link">Homepage</a>
                    <a href="/add-flower" className="nav-link">Add Flower</a>
                    <a href="/profile-management" className="nav-link">View Catalogue</a>
                </nav>
            </header>
            <hr className="header-divider" />
            <div className="flower-grid">
                {flowers.map((flower) => (
                    <div
                        key={flower.id}
                        className="flower-item"
                        onClick={() => handleCardClick(flower)}
                    >
                        <div className="flower-image-container">
                            <img src={flower.image} alt={flower.name} className="flower-image" />
                        </div>
                        <div className="flower-details">
                            <h3 className="flower-name">Flower Bouquet</h3>
                            <div className="flower-type-container">
                                <span className="flower-type">Type:</span>
                                <button className="flower-type-button">Flower</button>
                            </div>
                            <p className="flower-vendor"><span className="label">Vendor:</span> {flower.vendor}</p>
                            <p className="flower-price"><span className="label">Unit Cost:</span></p>
                            <p className="flower-price-value">{flower.price}</p>
                            <p className={`flower-stock ${flower.stock > 10 ? 'in-stock' : 'low-stock'}`}>
                                {flower.stock > 0 ? `${flower.stock} in stock` : 'Out of stock'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlowerList;
