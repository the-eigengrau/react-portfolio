import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import DesktopCoding from './DesktopCoding.js';
import './scss/coding.scss';
import './scss/desktopcoding.scss';

class Coding extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="codeSection">
          <p className="Backp"><Link className="Back" to="/"><ArrowBackIos className="Back"/></Link></p>
          <p className="designTitle">CODING PROJECTS</p>
          <div className="intro">
            <p className="good">Design is a conversation with materials.<br/></p>
            <p>I work hard to master the beautiful subject of computer science on an essentially daily basis, usually during heavily caffeinated mornings.</p>
            <p>Check out the projects below or my <a href="https://github.com/the-eigengrau">GitHub</a> to see what I’ve been working on.</p>
          </div>



          <div className="Coding">
                    <Accordion className="Accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                          Classes at Northwestern University
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="body">
                          I've been taking evening classes at Northwestern University in computer science and math while working as a UX designer.<br/><br/> My undergraduate degree was in psychology: Creating great software products requires a deep understanding of the human mind as well as computing.<br/><br/> I currently have a 4.0 GPA in my Northwestern Classes.</div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="Accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                          This Site in React
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="body">
                          I coded this site as an SPA in <a href="https://reactjs.org/">React</a> in order to take advantage of JSX, the performance benefits of the virtual DOM, and also leverage the component-based approach that React enables. I also used <a href="https://sass-lang.com/">Sass</a> instead of standard CSS primarily so that I could nest styles and use variables in my stylesheets.
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="Accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                          Data Science Projects in Python
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="body">
                          I've used machine learning models to predict survival rates on the Titanic, analyze deaths from gun violence, classify whether or not virus genomes are from SARS-CoV2, and predict bike-sharing demand, among other projects. <br/><br/> Data science is fascinating domain, and has a lot of product/design potential in terms of understanding and responding to user needs.
                          I've spent considerable time mastering both descriptive and predictive data analysis techniques both inside and outside of work.
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="Accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                          iOS Projects
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="body">
                          I've coded 10+ apps as class projects in a number of online courses I've taken, including Stanford's CS193p during the Spring of 2020. Among my projects were a weather app, a chat app, a to-do app, and an emoji-art creation app. <br/><br/>
                          The most exciting side project I'm working on right now is a gamified education app for iOS and WatchOS called Mimir.
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion className="Accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                          Other Projects
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="body">
                          Aside from the above, I've also done extensive work in R/Shiny at work, coded a number of projects in Java, learned a small amount of C programming with my 13 year old brother in David Malan's CS50, and done a number of beginner Arduino projects with my girlfriend. <br/><br/> Can you tell that I love this stuff? 🥳
                        </div>
                      </AccordionDetails>
                    </Accordion>


          </div>
          <DesktopCoding/>
        </div>
      </React.Fragment>
    );
  }
}

export default Coding
