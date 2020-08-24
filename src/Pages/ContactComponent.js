import React, { Component } from 'react';
import './scss/coding.scss'
import './scss/desktopcoding.scss'
import CSSTransition from 'react-transition-group';

class ContactComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      content: [
        'Fun Facts',
        'Story',
      ],
      render: [
        <React.Fragment className="useraction">
          <div className="col1-useraction">
            <p>I’ve lived in three continents, played sad songs about coal miners on guitar for fifteen years, and had minimal but noteworthy experience as an amateur blacksmith, glass blower, carpenter, and pre-prohibition era bartender. I enjoy the mental and physical challenge of jiujitsu, love collecting vinyls, meditating, and wandering in the hills. I’ve gone cliff jumping, rappelled down twenty story canyons, and been on sea kayaking expeditions among windswept Malaysian islands.</p>
          </div>
        </React.Fragment>,
        <React.Fragment className='motiv'>
          <div className="col1">
          <p>I came to college as a young idealist looking for a tangible way to make a difference. I took on a lot of different roles: Emergency medic, advocate for former felons, psychological researcher, and crisis counselor. I was looking for a scalable way to do something positive with the psychological insight I gained in my philanthropic forays. I also wanted to leverage the analytical and aesthetic knowledge I acquired exploring myriad eclectic disciplines in my classes.</p>
          <p>In my final semester, a friend mentioned to me that he thought I would be a great UX designer. I investigated the role and I was sold. At it’s core, UX channels an understanding of people, software, aesthetics, and business towards the creation of great products that move the needle on user outcomes at scale. It was exactly the adventure I was looking for.</p>
          <p>I started reading aggressively, teaching myself the practical skills of the designerly profession through courses, apprenticeship, and eventually through freelancing for startups in the City of Big Shoulders. After that, I worked as a consultant creating software for academic hospitals, billion-dollar energy companies, and top M&A practices. I learned a lot in this role, but the disciplinary boundaries were too tight. Because of that, I left to work on a small, early-stage team of ten people. We created financial apps and I founded the design practice, wore lots of hats, and climbed the steep cross-disciplinary learning curve I was looking for.</p>
          <p>On that team, I mentored and trained people in UX design and user research, created a modular design system, led UX for a suite of apps, did front-end development, and was even able to program parts of the back-end. It was thrilling to begin to grasp how all the parts of a great software product fit together and understand the critical importance and skills of each discipline on my team and how they contribute to the greater vision.</p>
          <p>I don’t know exactly what my next adventure will look like, but I know this: I want to work on tough problems with smart people in small ventures that matter. I want to work in a firm that has a real impact in the lives of its users. I want to wear a lot of hats, expand my skills, and develop my understanding of the firm as a whole so I can marshal resources and human ingenuity to make a dent in the universe.</p>
          </div>
        </React.Fragment>,
      ],
      currentState: 'Fun Facts'
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
      'Fun Facts':0,
      'Story': 1
    }

    return dict[input]
  }

  render(){

    return (
      <React.Fragment>
        <div className="aboutToggler">
          <ul className="canvasSelector">
            <li><button className={this.setClass(this.state.content[0])} onClick={() => this.setContentState(this.state.content[0])}>{this.state.content[0]}</button></li>
            <li><button className={this.setClass(this.state.content[1])} onClick={() => this.setContentState(this.state.content[1])}>{this.state.content[1]}</button></li>
          </ul>
            <div className="contentCanvas">
              {this.state.render[this.num(this.state.currentState)]}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactComponent
