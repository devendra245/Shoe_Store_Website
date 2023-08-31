import React from 'react';
import './Shop.css';
import bg from '../images/bg.webp';
import shoes1 from '../images/shoes1.webp';
import shoes2 from '../images/shoes2.webp';
import shoes3 from '../images/shoes3.webp';
import Footer from './Footer';


function Shop() {
    return (
        <>
        <div className="shop-container">
            <div className="background-section">
                <img
                    src={bg}
                    alt="Background"
                    className="background-image"
                />
                <div className="text-overlay">
                    <p>#Stay Home</p>
                </div>
            </div>
            <div className="content-section">
                <h2>Featured Products</h2>
                <div className="card-row">
                    <div className="card">
                        <img src={shoes1} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="card">
                        <img src={shoes1} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="card">
                        <img src={shoes1} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="card">
                        <img src={shoes1} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card">
                        <img src={shoes2} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="card">
                        <img src={shoes2} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                   <div className="card">
                        <img src={shoes2} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="card">
                        <img src={shoes2} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card">
                        <img src={shoes3} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="card">
                        <img src={shoes3} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                   <div className="card">
                        <img src={shoes3} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="card">
                        <img src={shoes3} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Shop;
