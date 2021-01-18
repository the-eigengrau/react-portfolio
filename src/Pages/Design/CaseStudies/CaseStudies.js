import React, { Component } from 'react';
import '../SCSS/CaseStudies.scss';
import '../SCSS/DesktopCaseStudies.scss';
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
        <p className="portfolioTitle">Better health for patients at Northwestern </p>
        <div className="tags">
          <p>UX</p>
          <p>Design Research</p>
        </div>
        </div>
      </Link>

      <Link className="pLink" to='/design/casestudies/2'><div className="portfolioItem">
      <div className="PortfolioImageTwo"></div>
        <p className="portfolioTitle">Designing ML apps to get more out of IPOs</p>
        <div className="tags">
          <p>UX/UI</p>
          <p>Coding</p>
          <p>Research/Strategy</p>
        </div>
      </div>
      </Link>

      <Link className="pLink" to='/design/casestudies/3'><div className="portfolioItem">
      <div className="PortfolioImageThree"></div>
        <p className="portfolioTitle">Helping engineers tell their story through design</p>
        <div className="tags">
          <p>UX/UI</p>
          <p>Coding</p>
          <p>Research/Strategy</p>
        </div>
      </div>
      </Link>

      <Link className="pLink" to='/design/casestudies/4'><div className="portfolioItem">
      <div className="PortfolioImageFour"></div>
      <Element name="portfolioScroll"></Element>
      <div className="PortfolioImage"></div>
        <p className="portfolioTitle">Founding design on a skilled, technical team</p>
        <div className="tags">
          <p>Design Management</p>
          <p>Research/Strategy</p>
        </div>
      </div>
      </Link>

      <Link className="pLink" to='/design/casestudies/5'><div className="portfolioItem">
      <div className="PortfolioImageFive"></div>
      <Element name="portfolioScroll"></Element>
      <div className="PortfolioImage"></div>
        <p className="portfolioTitle">Business Intelligence for a top 3 M&A practice</p>
        <div className="tags">
          <p>UX/UI</p>
          <p>Research/Strategy</p>
        </div>
      </div>
      </Link>

      <Link className="pLink" to='/design/casestudies/6'><div className="portfolioItem">
      <div className="PortfolioImageSix"></div>
      <Element name="portfolioScroll"></Element>
      <div className="PortfolioImage"></div>
        <p className="portfolioTitle">Designing an 82% faster system for field engineers</p>
        <div className="tags">
          <p>UX/UI</p>
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
