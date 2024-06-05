import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './about.css'

const About = () => {
const imageStyle = {
        maxWidth: "50%",
        height: "70vh", // Set the height to 100% of the viewport height
        objectFit: "cover", // Ensure the image covers the entire area
        borderRadius: "8px", // Add a border radius for rounded corners
        // marginTop : "200px"
      };
  return (
    <div  style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        
      }}>
      {/* <div className="image-container " > */}
        <img style={imageStyle} src="https://images.unsplash.com/photo-1597595452120-855581c199f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFib3V0JTIwbWV8ZW58MHx8MHx8fDA%3D" alt="Profile" className="profile-image" />
      {/* </div> */}
      <div className="text-content about">
        <h1>Hi Everyone</h1> <h1>I am Sham Girhe from Akola, India.</h1>
        <p>I have completed CDAC From Sunbeam Pune-Karad.</p>
        <p>Apart from coding, some other activities that I love to do:</p>
        <ul>
          <li>Playing Games</li>
          <li>Writing Tech Blogs</li>
          <li>Travelling</li>
        </ul>
        <p className="quote">"Strive to build things that make a difference!"</p>
      </div>
    </div>
  );
};

export default About;
