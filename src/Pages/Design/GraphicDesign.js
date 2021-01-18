import React, { Component } from 'react';
import './SCSS/Design.scss';
import './SCSS/GraphicDesign.scss';
import './SCSS/DeskGraphicDesign.scss';
import dna from './GraphicDesign/DNA.png';
import bubble from './GraphicDesign/bubble.png';
import bottles from './GraphicDesign/bottles.png';
import mag from './GraphicDesign/magfield.png';
import wave from './GraphicDesign/wave.png';
import towers from './GraphicDesign/towers.png';
import polrev from './GraphicDesign/polrev.png';
import feather1 from './GraphicDesign/feather1.png';
import feather3 from './GraphicDesign/feather3.png';
import j3 from './GraphicDesign/J3.png';
import startrek from './GraphicDesign/startrek.png';
import CaseStudies from './CaseStudies/CaseStudies.js'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {FiChevronsDown} from 'react-icons/fi';

import DPsych from './DPsych.js'
import {
  Route,
  Link,
  Switch
} from "react-router-dom";

class GraphicDesign extends Component {

  componentDidMount() {

  Events.scrollEvent.register('begin', function () {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register('end', function () {
    console.log("end", arguments);
  });

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
              <Link className="NonSelected" to="/design/casestudies">UX/UI</Link>
            </div>
            <div>
              <Link className="NonSelected" to="/design/psych">Applied<br/>Psychology</Link>
            </div>
            <div>
              <Link className="Selected" to="/design/graphics">Graphic<br/>Design</Link>
            </div>
          </div>
          <a className="ScrollButton" onClick={() => scroll.scrollMore(500)}><FiChevronsDown className="down"/></a>
          <div className="GraphicDesign">

            <div className="mobileImages">
            <img src={bubble} className="image"/>
            <img src={bottles} className="image"/>
            <img src={dna} className="image"/>
            <img src={polrev} className="image"/>
            <img src={mag} className="image"/>
            <img src={towers} className="image"/>
            <img src={wave} className="image"/>
            <img src={feather1} className="image"/>
            <img src={j3} className="image"/>
            <img src={feather3} className="image"/>
            <img src={startrek} className="image"/>
            </div>

            <div className="desktopImages-col1">
              <img src={bubble} className="image"/>
              <img src={polrev} className="image"/>
              <img src={wave} className="image"/>
              <img src={feather1} className="image"/>
            </div>
            <div className="desktopImages-col2">
                <img src={bottles} className="image"/>
                <img src={mag} className="image"/>
                <img src={feather3} className="image"/>
                <img src={startrek} className="image"/>
            </div>
            <div className="desktopImages-col2">
              <img src={dna} className="image"/>
              <img src={towers} className="image"/>
              <img src={j3} className="image"/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GraphicDesign
