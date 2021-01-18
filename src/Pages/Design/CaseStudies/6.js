import React, { Component } from 'react';
import '../SCSS/CaseStudy.scss'
import '../SCSS/DesktopCaseStudy.scss'
import '../SCSS/Design.scss'
import energy from './images/energy.png'
import energy2 from './images/energy2.jpeg'
import energy3 from './images/energy3.jpeg'
import energy4 from './images/energy4.jpeg'
import energy5 from './images/energy5.jpeg'
import energy6 from './images/energy6.jpg'
import energy7 from './images/energy7.png'
import energy8 from './images/energy8.jpeg'
import energy9 from './images/energy9.jpeg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

class Six extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="caseStudy-container1">
          <p className="Backp"><Link className="Back" to="/design/casestudies"><ArrowBackIos className="Back"/></Link></p>
          <p className="caseTitle">Designing an 82% faster system for field engineers</p>

          <img src={energy} className="ipo"/>
          <div className="content2">
            <p>Building software to shape and improve physical processes is an exciting prospect. It requires understanding of processes, people, software, business tradeoffs. A billion dollar energy company hired my team to create an app for their field engineers to simplify their workflow and improve safety. As the title of this case study suggests, through user research, ideation workshops, and UX/UI design we were able to achieve an 82% improvement in efficiency for our users. </p>
            <p>The practical impact of this new application felt very significant to me because much of our user research was conducted in steel-toed boots and wearing a hard hat in the field side by side with our users. These are people who do a dangerous, risky job under tough conditions and do it with a lot of humor, equanimity, and charm. They deserve great tools to help them do their work. </p>
            <p className="subtitle">USER RESEARCH</p>
            <img src={energy2} className="fwblog"></img>
            <img src={energy3} className="fwblog"></img>
            <img src={energy4} className="fwblog"></img>
            <img src={energy5} className="fwblog"></img>
            <p className="subtitle">INFORMATION ARCHITECTURE</p>
            <p>Our app was replacing two legacy systems, across multiple states, with distinct regulatory  and organizational requirements. There was a lot of complexity to parse here. So the first thing I did was map the IA of each system, looking for commonalities. We needed our solution to feel seamless within the workflow of engineers who were previously using both systems.</p>
            <img src={energy6} className="fwblog"></img>
            <img src={energy7} className="fwblog"></img>
            <p className="subtitle">FINAL DESIGN EXAMPLES</p>
            <p>There were many UI development challenges on this project due to the tech stack that the company opted to use. But because of my knowledge of code, I was able to work constructively with our development team to generate the crucial UI elements we needed to make our conversational, focused design paradigm work. </p>
            <img src={energy8} className="fwblog"></img>
            <img src={energy9} className="fwblog"></img>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Six;
