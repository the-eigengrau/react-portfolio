import React, { Component } from 'react';
import '../SCSS/CaseStudy.scss'
import '../SCSS/DesktopCaseStudy.scss'
import '../SCSS/Design.scss'
import bi1 from './images/bi.png'
import bi2 from './images/bi2.png'
import bi3 from './images/bi3.png'
import bi4 from './images/bi4.png'
import bi5 from './images/bi5.png'
import bi6 from './images/bi6.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

class Five extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="caseStudy-container1">
          <p className="Backp"><Link className="Back" to="/design/casestudies"><ArrowBackIos className="Back"/></Link></p>
          <p className="caseTitle">Business intelligence for a top-3 M&A practice</p>

          <img src={bi1} className="ipo"/>
          <div className="content2">
            <p>Deals, deals, deals. I’ve worked on software projects for two of the three most prominent deal advisory firms in the United States, and I’ve come to appreciate the intensity, strategic value, complexity, and peril involved in large corporate transactions. As I said in my other case study, a corporate transaction is like a heart transplant: When it's done right, it brings new life to an organization, but without intensive work and expertise it defaults to failure. </p>
            <p>This project was intended to mitigate some of those risks by helping partners and senior staff identify new ways in which they can help client firms on engagements. I designed the majority of the user-experience for this project and also did extensive domain and user research, including reading a lot of byzantine deal paperwork in meticulous detail.</p>
            <p className="subtitle">USER RESEARCH</p>
            <img src={bi2} className="fwblog"></img>
            <p>The biggest user challenge on this project is the biggest challenge facing almost every product: Gaining user traction through a combination of targeting the right pain points, telling the right story about those pain points, and having a frictionless, well-conceived solution as the culmination of that story.</p>
            <p>I dug deep into behavioral design for this project in an attempt to use gamification to help facilitate stickiness and imbue a sensible mental model into our app. You’ll see a range of elements in the final product that leverage the achievement orientation of our ultra-competitive user base to motivate engagement with the app.</p>
            <p className="subtitle">EARLY IDEATION</p>
            <p>From a blue-sky ideation perspective, I knew I wanted to create something highly responsive, fast, and structured in order to encourage the partners to pursue value-add/cross-sell opportunities on their deals. I wanted them to be able to see a roadmap of opportunities with the minimal amount of input possible.</p>
            <img src={bi3} className="fwblog"></img>
            <img src={bi4} className="fwblog"></img>
            <p className="subtitle">PROTOTYPES</p>
            <p>The final design is intended to lead users from complacency to action: I wanted to say clearly to users “you’re doing good, but you could do great” and then I wanted to show them a clear path towards better outcomes. You see that in our design. We start with current deals, and then have a range of sales multipliers or a sales roadmap depending on the deal. Sales multipliers are  essentially high-value cross-sell opportunities that are commonly neglected, and a sales roadmap is the parsing of   these multipliers into a sensible stack of sequential value-adds.</p>
            <img src={bi5} className="ipo"></img>
            <p>We also made the process of following up on opportunities frictionless by having a clear set of discussion points and contacts readily available above the fold. We also added clarity around which opportunities are the highest value and most worth pursuing.</p>
            <img src={bi6} className="ipo"></img>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Five;
