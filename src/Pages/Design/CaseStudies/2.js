import React, { Component } from 'react';
import '../SCSS/CaseStudy.scss'
import '../SCSS/DesktopCaseStudy.scss'
import '../SCSS/Design.scss'
import doc1 from './images/doc1.png'
import doc2 from './images/doc2.png'
import ipo1 from './images/ipo1.png'
import ipo2 from './images/ipo2.png'
import ipo3 from './images/ipo3.png'
import ipo4 from './images/ipo4.png'
import ipo5 from './images/ipo5.png'
import ipo6 from './images/ipo6.png'
import ipo9 from './images/ipo9.png'
import sketch1 from './images/ipoa.jpg'
import sketch2 from './images/ipoa1.jpg'
import sketch3 from './images/ipoa2.jpg'
import sketch4 from './images/ipoa3.jpg'
import wireframe from './images/ipob.png'
import early from './images/ipoc.png'
import late from './images/ipod.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

class Two extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="caseStudy-container1">
          <p className="Backp"><Link className="Back" to="/design/casestudies"><ArrowBackIos className="Back"/></Link></p>
          <p className="caseTitle">Designing ML apps to get more out of mergers, acquistions, and IPOs</p>
          <div className="content">
          <img src={ipo1} className="ipo-header"/>
          <div className="content2">
              <p>What are IPOs really about? Years of hard work culminating in exits that finally reward the blood, sweat, tears, and faith of loyal teams struggling every day to make their visions real. A corporate deal is somewhere between a marriage and a heart-transplant in terms of complexity. We aimed to tame that complexity with computational rigor and a data-driven approach, massively improving the odds of a successful outcome.</p>
              <p>The small, two year old team that I joined consisted of ten mathematicians, economists, and programmers that had generated a small stable of technically brilliant apps which were sorely lacking in effective design and not gaining significant user traction.</p>
              <p className="subtitle">USER RESEARCH</p>
              <div className="ipo2"></div>
              <p>I conducted multiple types and waves of user research to understand our users’ workflow, pain-points, motivations, experiences, workarounds and more. Due to NDA, I cannot reveal much of the specifics here, but I can say that I leveraged ethnographic interviews, over-the-shoulder contextual inquiry, survey research, and other modalities. I also aimed for what I believe is a critical ideal: A team where every staff member in every discipline talks to users atleast once every 8 weeks. We were able to achieve this.  </p>
              <p>Through our efforts we were able to surface crucial insights about user needs, workflow, culture, language, desires, and frustrations that enabled us to find high-leverage opportunities for new features and apps.</p>
              <p className="subtitle">DESIGN SYSTEM</p>
              <p>Systematization was very important on this team for regular set of reasons, and then a few special ones. The typical reasons for implementing design systems include consistency, learnability of the interface, credibility with the user, coherence of subsequent designs, and usability. The special reasons we need to be systematic on this team were tied to the fact that I was founding the design team net-new: The system needed to be well thought out to accommodate new designers, to allow me to effectively wear a lot of hats and adapt to the demands of new apps and features, and also be organized in a sensible way so that I could program the relevant modules with relative ease.</p>
              <p>The system was built around dividing our data science process into repeatable, concise steps that comprise an intelligible mental model, with significant contextual help, easily accessible documentation at various levels of resolution, and client-ready outputs. Here are some examples of components from the design system:</p>
              <img src={ipo3} className="ds"/>
              <p className="subtitle">DESIGNING THE APPS</p>
              <p>My process typically involved speaking to people, sketching some initial ideas and variations, then creating wireframes, and refining the UI over multiple iterations. After that me and another colleague, depending upon availability, would code the front-end, and in some cases for completely new features, I would help with coding the back-end as well. Here's a few sketches from a data-room project I was undertaking:</p>
              <div className="sketches"><img src={sketch1} className="sketch"/><img src={sketch2} className="sketch"/><img src={sketch3} className="sketch"/><img src={sketch4} className="sketch"/></div>
              <p>Here’s an example of a wireframe from one of our eight products, focused on optimizing physical asset locations for merging firms:</p>
              <img src={wireframe} className="wireframe"/>
              <p>Here is an example of an early UI design. The core ideas for the mature UI are all here, but the specific layout, form factor, and affordances are all still fluid. You can see here our core paradigm of dividing the data science process, regardless of specific modality, into an easy to learn set of focused steps culminating in an exploratory canvas:</p>
              <img src={early} className="wireframe1"/>
              <p>This is an example of a mature UI, leveraging the fullness of our design system. This essentially looks the same as our apps in code. There are some minor changes made to the look and feel, things are sharper, more professional looking, some of the visual elements are distinct, and some changes have been made to accommodate ease of development:</p>
              <img src={late} className="wireframe1"/>
              <p className="subtitle">PROGRAMMING THE APPS</p>
              <p>I coded the front-end using Shiny with a lot of bizarre workarounds and javascript integrations. Our team consisted of die-hard R users, so creating modular UI code using Shiny was the easiest way to help them spin up apps to match the wireframes for future projects. I used R and javascript to code certain back-end elements as well, specifically the user data logging API and the contextual help system.</p>
              <p className="subtitle">GAINING USER TRACTION</p>
              <p>Based on user and domain research, as well as market analysis, I devised a product strategy,  created branding for our team, developed go-to-market materials, designed and coded a team website, created stickers and other collateral, and concocted a communication strategy to help us better connect with our user-base. You can learn more about it <Link className="going" to="/design/casestudies/3">here</Link>.</p>
              <img src={ipo9} className="ipo"/>
          </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Two
