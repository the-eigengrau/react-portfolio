import React, { Component } from 'react';
import HomePage from './Pages/HomePage.js'
import Design from './Pages/Design/Design.js'
import GraphicDesign from './Pages/Design/GraphicDesign.js'
import DPsych from './Pages/Design/DPsych.js'
import Coding from './Pages/Coding.js'
import One from './Pages/Design/CaseStudies/1.js'
import BookRecommendations from './Pages/BookRecommender.js'
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

      <Router>
        <ul className="Menu">
          <li className="MenuItem"><Link className="Link" to="/design/casestudies">Design Portfolio</Link></li>
          <li className="MenuItem"><Link className="Link" to="/coding">Coding Projects</Link></li>
          <li className="MenuItem"><Link className="Link" to="/books">Book Recommendations</Link></li>
          <li className="MenuItem"><a className="Link" href="mailto:ayon.b@protonmail.com">Contact me</a></li>
          <li><div className="loveLine"><p>Programmed in React with </p><a href="https://bit.ly/31kDS9i"><p className="heart"> 💜 </p></a></div></li>
        </ul>

        <Switch>
          <Route path='/books'><BookRecommendations/></Route>
          <Route path='/coding'><Coding/></Route>
          <Route path='/design/psych'><DPsych/></Route>
          <Route path='/design/graphics'><GraphicDesign/></Route>
          <Route path='/design/casestudies/1'><One/></Route>
          <Route path="/design/casestudies"><Design /></Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

      </Router>
      </React.Fragment>
    );
  }
}

export default Container
