import React, { Component } from 'react';
import './Design/scss/CaseStudies.scss'
import './scss/contact.scss'
import './scss/contactdesktop.scss'
import ContactComponent from './ContactComponent.js'
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


class Contact extends Component {

  render(){
    return (
      <React.Fragment>
      <div className="contact">
      <div className="top">
        <p className="Backp"><Link className="Back" to="/"><ArrowBackIos className="Back"/></Link></p>
        <p className="designTitle">About Me</p>
      </div>

      <div className="mugshot">
        <div className="Image">
          <h1 className="CircleText">A</h1>
          <div className="HeaderText"></div>
        </div>
        <div className="details">
          <a href='www.linkedin.com/in/ayon-ux/'>linkedin.com/ayon-ux/</a>
          <a href="mailto:ayon.b@protonmail.com">ayon.b@protonmail.com</a>
        </div>
      </div>
        <ContactComponent/>
      </div>
      </React.Fragment>
    );
  }
}

export default Contact
