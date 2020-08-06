import React, { Component } from 'react';
import Design from './Design/Design.js'

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
      </React.Fragment>
    );
  }
}

export default HomePage
