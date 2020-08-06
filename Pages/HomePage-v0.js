import React, { Component } from 'react';

class HomePage extends Component {

  render(){
    return (
      <React.Fragment>
      <div className="Header">
        <div className="HeaderText">
          <h1 className="LogoText"></h1>
          <p> Empowering people through computing.</p>
        </div>
      </div>
      <div className="BlogSection">
          <p className="Title">Latest Post</p>
          <p className="Text"><strong>Article Title:</strong> Lorem ipsum dolor sit amet lacrima susspendisse.</p>
      </div>
      <div className="Menu">
        <button className="MenuItem" href="www.google.com">Design Portfolio</button>
        <button className="MenuItem" href="www.google.com">Coding Projects</button>
        <button className="MenuItem" href="www.google.com">Book Recommendations</button>
        <button className="MenuItem" href="www.google.com">Contact Me</button>
        <p className="loveLine">Programmed in React with 💜</p>

      </div>
      </React.Fragment>
    );
  }
}

export default HomePage
