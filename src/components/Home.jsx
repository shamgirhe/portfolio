import React from "react";
import { Container } from "react-bootstrap";
import TypingEffect from "./TypingEffect";
import Header from "./Header";
import './home.css'
import About from "./About";
import Frame from "./Frame";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "100vh", // Set the height to 100% of the viewport height
    objectFit: "cover", // Ensure the image covers the entire area
    borderRadius: "8px" // Add a border radius for rounded corners
  };

  return (
    <>
          {/* <Header /> */}
  <Container id="Home" style={{ marginTop: "20px" }}>
      <div style={containerStyle}>
        <div className="name">
          <div>
            <h2  style={{ marginBottom: "10px",display: "flex" }}>
              Hii There..! <div className="wave">👋</div>
            </h2>
            <h1 style={{ marginBottom: "20px" }}>I'm Sham Girhe</h1>
            <h1>
              <TypingEffect />
            </h1>
          </div>
        </div>
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            style={imageStyle}
          />
        </div>
      </div>
     
    </Container>
    <About></About>
    
    </>
  );
};

export default Home;
