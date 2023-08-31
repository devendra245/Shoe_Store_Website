import React from 'react';
import './AboutUs.css';
import Footer from './Footer';

function About() {
  return (
    <>
    <div className="about-us">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to our shoe store, where style meets comfort. Our journey began with a passion for footwear and a vision to provide the perfect pair for every step you take. With years of dedication and expertise, we've curated a collection that blends fashion, quality, and affordability.
        </p>
        <p>
          Our team of designers and shoemakers work tirelessly to craft shoes that not only look great but also feel amazing to wear. From casual sneakers to elegant heels, our range caters to diverse tastes and occasions. We believe that the right pair of shoes can enhance your confidence and make you stand tall.
        </p>
        <p>
          Quality is at the heart of everything we do. Each shoe is carefully crafted using premium materials to ensure durability and comfort. We pay attention to every detail, from the stitching to the sole, to create shoes that are both stylish and functional. Our commitment to quality extends beyond the product itself – it's about the experience you have when you wear our shoes.
        </p>
        <p>
          At our store, we're not just selling shoes; we're providing a lifestyle. Our goal is to empower individuals to express themselves through their footwear choices. Whether you're exploring the city, attending a special event, or simply relaxing with friends, our shoes are designed to accompany you on every journey.
        </p>
        <p>
          The driving force behind our success is our team of dedicated individuals, each contributing their expertise to deliver the best. Meet our core team members below:
        </p>
      </div>

      {/* Owner's information cards */}
      <div className="owner-card">
        <div className="owner-details">
          <img src="https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034956958?e=2147483647&v=beta&t=6H_aZri3qcbtlgwTyTKBceuyTEPYW43xGViq5UL4J-w" alt="Devendra Kumar Jha" />
          <h3>John Doe</h3>
          <p>Date of Birth: January 1, 1990</p>
          <p>Designation: Founder & CEO</p>
        </div>
        <div className="owner-details">
          <img src="https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034956958?e=2147483647&v=beta&t=6H_aZri3qcbtlgwTyTKBceuyTEPYW43xGViq5UL4J-w" alt="John Smith" />
          <h3>John Smith</h3>
          <p>Date of Birth: February 15, 1985</p>
          <p>Designation: Creative Director</p>
        </div>
        <div className="owner-details">
          <img src="https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034956958?e=2147483647&v=beta&t=6H_aZri3qcbtlgwTyTKBceuyTEPYW43xGViq5UL4J-w" alt="Alice Johnson" />
          <h3>Alice Johnson</h3>
          <p>Date of Birth: March 22, 1992</p>
          <p>Designation: Chief Designer</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
