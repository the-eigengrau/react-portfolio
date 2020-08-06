import React, { Component } from 'react';
import '../SCSS/CaseStudies.scss';
import {
  Link
} from "react-router-dom";

import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {FiChevronsDown} from 'react-icons/fi';

class CaseStudies extends Component {
  componentDidMount() {

  Events.scrollEvent.register('begin', function () {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register('end', function () {
    console.log("end", arguments);
  });

}

  render(){
    return (
      <React.Fragment>

      <div className="PortfolioItems">
      <a className="ScrollButton" onClick={() => scroll.scrollMore(500)}><FiChevronsDown className="down"/></a>

      <Link className="pLink" to='/design/casestudies/1'><div className="portfolioItem">
        <div className="PortfolioImageOne"></div>
        <p className="portfolioTitle">Connecting doctors to patients at an <br/> award-winning teaching hospital</p>
        <div className="tags">
          <p>UX</p>
          <p>Design Research</p>
        </div>
        </div>
      </Link>

      <Link className="pLink" to='/design/casestudies/1'><div className="portfolioItem">
      <div className="PortfolioImageTwo"></div>
        <p className="portfolioTitle">Creating ML apps to help clients get more <br/>out of IPOs</p>
        <div className="tags">
          <p>UX/UI</p>
          <p>Coding</p>
          <p>Research/Strategy</p>
        </div>
      </div>
      </Link>

      <Link className="pLink" to='/design/casestudies/1'><div className="portfolioItem">
      <div className="PortfolioImageThree"></div>
        <p className="portfolioTitle">Helping a talented engineering team tell their story through design</p>
        <div className="tags">
          <p>UX/UI</p>
          <p>Coding</p>
          <p>Research/Strategy</p>
        </div>
      </div>
      </Link>

      <Link className="pLink" to='/design/casestudies/1'><div className="portfolioItem">
      <div className="PortfolioImageFour"></div>
      <Element name="portfolioScroll"></Element>
      <div className="PortfolioImage"></div>
        <p className="portfolioTitle">Founding the design discipline on a deeply technical team</p>
        <div className="tags">
          <p>UX/UI</p>
          <p>Coding</p>
          <p>Research/Strategy</p>
        </div>
      </div>
      </Link>

      </div>
      </React.Fragment>
    );
  }
}

export default CaseStudies
