import React, { Component } from 'react';
import HomePage from './Pages/HomePage.js'
import Design from './Pages/Design/Design.js'
import GraphicDesign from './Pages/Design/GraphicDesign.js'
import DPsych from './Pages/Design/DPsych.js'
import Coding from './Pages/Coding.js'
import One from './Pages/Design/CaseStudies/1.js'
import Two from './Pages/Design/CaseStudies/2.js'
import Three from './Pages/Design/CaseStudies/3.js'
import Four from './Pages/Design/CaseStudies/4.js'
import Five from './Pages/Design/CaseStudies/5.js'
import Six from './Pages/Design/CaseStudies/6.js'
import BookRecommendations from './Pages/BookRecommender/BookRecommender.js'
import ScrollToTop from './ScrollToTop.js'
import Medium from './Pages/Medium.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Container extends Component {

  render(){
    return (
      <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <ul className="Menu">
          <li className="MenuItem"><Link className="Link" to="/design/casestudies">Design Portfolio</Link></li>
          <li className="MenuItem"><Link className="Link" to="/coding">Coding Projects</Link></li>
          <li className="MenuItem"><Link className="Link" to="/books">Book Recommendations</Link></li>
          <li className="MenuItem"><a className="Link" href="mailto:ayon.b@protonmail.com">Contact me</a></li>
          <li><div className="loveLine"><p>Programmed in React with </p><a href="https://bit.ly/31kDS9i"><p className="heart"> 💜 </p></a></div></li>
        </ul>

        <div className="DesktopBorder"></div>
        <div className="FeaturedCaseStudy">
        <p className="Text">FEATURED CASE STUDY</p>
        <Link className="pLink" to='/design/casestudies/1'><div className="portfolioItem">
          <div className="PortfolioImageOne"></div>
          <p className="portfolioTitle">Better health for patients at Northwestern </p>
          <div className="tags">
            <p>UX</p>
            <p>Design Research</p>
          </div>
          <p>Northwestern Medicine tasked us with creating a mobile app for patients with complex conditions seeking world-class specialists.</p>
          <p>I performed user research, UX design, usability testing, and facilitated design workshops. <span>Learn more</span></p>
          </div>
        </Link>
        </div>
        <Medium/>

        <Switch>
          <Route path='/books'><BookRecommendations/></Route>
          <Route path='/coding'><Coding/></Route>
          <Route path='/design/psych'><DPsych/></Route>
          <Route path='/design/graphics'><GraphicDesign/></Route>
          <Route path='/design/casestudies/6'><Six/></Route>
          <Route path='/design/casestudies/5'><Five/></Route>
          <Route path='/design/casestudies/4'><Four/></Route>
          <Route path='/design/casestudies/3'><Three/></Route>
          <Route path='/design/casestudies/2'><Two/></Route>
          <Route path='/design/casestudies/1'><One/></Route>
          <Route path="/design/casestudies"><Design /></Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

      </ScrollToTop>
      </Router>
      </React.Fragment>
    );
  }
}

export default Container
