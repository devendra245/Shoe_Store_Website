import React from "react";
import "./main.css";
import main from "../images/t-img.png";
import shoes1 from '../images/shoes1.webp';
import shoes2 from '../images/shoes2.webp';
import shoes3 from '../images/shoes3.webp';
import Footer from "./Footer";

function Main() {
  return (
    <>
    <div className="m-container">
      <div className="title-content">
        <div className="title">
          <h4>Elevate Your Style, Step Comfortably</h4>
        </div>
        <div className="content">
          <p>Welcome to our shoe paradise, where fashion meets comfort.
            Explore a curated collection of exquisite footwear that elevates your style and pampers your feet with every step. Indulge today!</p>
        </div>
      </div>
      <div className="t-img">
        <img src={main} alt="main" className="main-img" />
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
                        <img src={shoes2} alt="Product 1" />
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
                        <img src={shoes1} alt="Product 1" />
                        <h3>High Tops For Men</h3>
                        <p>Rating: 4.5 stars</p>
                        <p>Price: ₹399</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
                </div>
                <Footer/>
    </>
  );
}

export default Main;
