import React from 'react';
import './FrameWrapper.css'; // Import CSS file for styling
import Frame from './Frame';
import { Container } from 'react-bootstrap';

const FrameWrapper = () => {
    let Technologies = 

      [
        "https://angular.io/assets/images/logos/angular/angular.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        "https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
      ];
      
  return (
    <>
    <h1 style={{textAlign:"center",color:"pink"}}>Languages and Tools :-</h1>
    <Container className="frame-wrapper">
      { Technologies.map(ele=>{
       return <Frame logo = {ele}></Frame>
      })}
    
    {/* <Frame logo = {"https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"}></Frame>
    <Frame logo = {"https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"}></Frame>
    <Frame logo = {"https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"}></Frame>
    <Frame logo = {"https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"}></Frame>
    <Frame logo = {"https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"}></Frame>
    <Frame logo = {"https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"}></Frame>
    <Frame logo = {"https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"}></Frame> */}
   
    </Container>
    </>
  );
};

export default FrameWrapper;
