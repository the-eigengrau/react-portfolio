import React, { Component } from 'react';
import './SCSS/Design.scss';
import CaseStudies from './CaseStudies/CaseStudies.js'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import GraphicDesign from './GraphicDesign.js'
import DPsych from './DPsych.js'
import {
  Route,
  Link,
  Switch
} from "react-router-dom";

class Design extends Component {

  state = {
      displayDownButton: false,
      displayUpButton: false,
      scrollPosition:0
}
  //animate this button
  render(){
    return (
      <React.Fragment>
        <div className="design">

          <p className="Backp"><Link className="Back" to="/"><ArrowBackIos className="Back"/></Link></p>
          <p className="designTitle">Design Portfolio</p>
          <div className="designToggle">
            <div>
              <Link className="Selected" to="/design/casestudies">UX/UI</Link>
            </div>
            <div>
              <Link className="NonSelected" to="/design/psych">Applied<br/>Psychology</Link>
            </div>
            <div>
              <Link className="NonSelected" to="/design/graphics">Graphic<br/>Design</Link>
            </div>
          </div>
            <Route path='/design/casestudies'><CaseStudies/></Route>
            <Route path='/design/psych'><DPsych/></Route>
            <Route path='/design/graphics'><GraphicDesign/></Route>
        </div>
      </React.Fragment>
    );
  }
}

export default Design
