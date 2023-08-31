import "./Contact.css"
import React, { useState, useEffect } from 'react';
import Footer from './Footer';



const images = [
    require('../images/f.png'),
    require('../images/f1.png'),
    require('../images/f2.png'),
    // Add more image paths as needed
  ];
function Contact() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentImage = images[currentImageIndex];

    return (
      <>
        <div className="contact-container">
        <div className="image-container">
          <img src={currentImage} alt="contact" className="colorful-image" />
        </div>
        <div className="form-container">
            <h1>Contact Us</h1>
            <form>
                <div className="input-group">
                    <input type="text" placeholder="First Name"  required/>
                    <input type="text" placeholder=" Last Name" />
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Email Address" required/>
                    <input type="text" placeholder=" Phone Number" required/>
                </div>
                <textarea placeholder="Your Message"></textarea>
                <select required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="Sales">Sales</option>
                    <option value="Purchase">Purchase</option>
                </select>
                <button className="submitc" type="submit">Submit</button>
            </form>
        </div>
       
        </div>
        <Footer/>
        </>
        );
        }
        export default  Contact;