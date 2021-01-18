import React, { Component } from 'react';
import './scss/coding.scss'
import './scss/desktopcoding.scss'
import hacker from './scss/hackerman.jpg'

import {
  Link
} from "react-router-dom";

import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {FiChevronsDown} from 'react-icons/fi';

class DesktopCoding extends Component {
  constructor(props){
    super(props)

    this.state = {
      content: [
        'Classes at Northwestern University',
        'This Site in React',
        "Data Science Projects in Python",
        'iOS Projects',
        'Other Projects'
      ],
      render: [
        <React.Fragment className="useraction">
          <div className="col1-useraction">
            <p>I've been taking evening classes at Northwestern University in computer science and math while working as a UX designer.<br/><br/> My undergraduate degree was in psychology: Creating great software products requires a deep understanding of the human mind as well as computing.</p>  <p>I currently have a 4.0 GPA in my Northwestern Classes.</p>
          </div>
          <div className="col2-useraction">
            <p>My program consists of:</p>
            <ul>
              <li>Object-Oriented Programming in Java</li>
              <li>Intro to Python for Data Science</li>
              <li>Microeconomics</li>
              <li>Applied Data Science</li>
              <li>Foundations of Higher Math</li>
              <li>Enterprise Data Science</li>
              <li>Fall 2020 - Spring 2021: Computer Networks, Multivariable Calculus, Linear Algebra, Probability and Stochastic Processes, Information Security</li>
            </ul>
          </div>
        </React.Fragment>,
        <React.Fragment className='motiv'>
          <div className="col1">
            <p>I coded this site as an SPA in <a href="https://reactjs.org/">React</a> in order to take advantage of JSX, the performance benefits of the virtual DOM, and also leverage the component-based approach that React enables. I also used <a href="https://sass-lang.com/">Sass</a> instead of standard CSS primarily so that I could nest styles and use variables in my stylesheets.</p>
            <p>I designed and developed the site mobile-first for the performance benefits and also because it brought more focus and clarity to my design.</p>
          </div>
          <div className="col2">
            <p>DEPLOYMENT DETAILS</p>
          </div>
        </React.Fragment>,
        <React.Fragment className='bartle'>
          <div className="col1">
            <p>I've used machine learning models to predict survival rates on the Titanic, analyze deaths from gun violence, classify whether or not virus genomes are from SARS-CoV2, and predict bike-sharing demand, among other projects. Data science is fascinating domain, and has a lot of product/design potential in terms of understanding and responding to user needs.</p>
          </div>
          <div className="col2">
            <p>I've spent considerable time mastering both descriptive and predictive data science techniques both inside and outside of work, because I believe that taking an evidence-based approach to product/design decisions is essential to success.</p>
          </div>
        </React.Fragment>,
        <React.Fragment className='anthro'>
          <div className="col1">
            <p>I've coded 10+ apps as class projects in a number of online courses I've taken, including Stanford's CS193p during the Spring of 2020. Among my projects were a weather app, a chat app, a to-do app, and an emoji-art creation app.</p>
          </div>
          <div className="col2">
            <p>The most exciting side project I'm working on right now is a gamified education app for iOS and WatchOS called Mimir. We're using behavioral deisgn techniques and gamification to helps users read 10x more consistently, spark personal transformations through engaging with great books, and connect with others over reading.</p>
          </div>
        </React.Fragment>,
        <React.Fragment className='dpsych'>
          <div className="col1">
            <p>Aside from the above, I've also done extensive work in R/Shiny at work, coded a number of projects in Java, learned a small amount of C programming with my 13 year old brother in David Malan's CS50, and done a number of beginner Arduino projects with my girlfriend. <br/><br/> Can you tell that I love this stuff? 🥳</p>
          </div>
          <div className="col2">
            <img src={hacker}></img>
          </div>
        </React.Fragment>
      ],
      currentState: 'Classes at Northwestern University'
    };
    this.setContentState = this.setContentState.bind(this);
    this.getContentState = this.getContentState.bind(this);
  }

  setContentState = (input) => {
    this.setState({currentState:input})

  }

  getContentState = (input) => {
    return <p>{this.state.currentState}</p>
  }

  setClass(input) {
    var bool = this.state.currentState === input
    return (bool ? 'selected' : 'not-selected');
}

  num(input) {
    var dict = {
      'Classes at Northwestern University':0,
      'This Site in React': 1,
      "Data Science Projects in Python":2,
      'iOS Projects':3,
      'Other Projects':4
    }

    return dict[input]
  }

  render(){

    return (
      <React.Fragment>
        <div className="contentToggler">
          <ul className="canvasSelector">
            <li><button className={this.setClass(this.state.content[0])} onClick={() => this.setContentState(this.state.content[0])}>{this.state.content[0]}</button></li>
            <li><button className={this.setClass(this.state.content[1])} onClick={() => this.setContentState(this.state.content[1])}>{this.state.content[1]}</button></li>
            <li><button className={this.setClass(this.state.content[2])} onClick={() => this.setContentState(this.state.content[2])}>{this.state.content[2]}</button></li>
            <li><button className={this.setClass(this.state.content[3])} onClick={() => this.setContentState(this.state.content[3])}>{this.state.content[3]}</button></li>
            <li><button className={this.setClass(this.state.content[4])} onClick={() => this.setContentState(this.state.content[4])}>{this.state.content[4]}</button></li>
            </ul>
            <div className="contentCanvas">
              {this.state.render[this.num(this.state.currentState)]}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DesktopCoding
