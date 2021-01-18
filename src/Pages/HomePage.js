import React, { Component } from 'react';
import './Design/SCSS/CaseStudies.scss'
import Design from './Design/Design.js'

import {
  Link
} from "react-router-dom";

class HomePage extends Component {

  render(){
    return (
      <React.Fragment>
      <div className="DesktopSlogan"><h1 className="LogoTextDesktop">Ayon</h1><p> Empowering people through computing.</p></div>
      <div className="Header">
        <h1 className="CircleTextDesktop">A</h1>
        <div className="HeaderText">
          <h1 className="LogoText"></h1>
          <p> Empowering people through computing.</p>
        </div>
      </div>

      </React.Fragment>
    );
  }
}

export default HomePage
