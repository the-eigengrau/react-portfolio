import React, { Component } from 'react';
import '../scss/CaseStudy.scss'
import '../scss/DesktopCaseStudy.scss'
import '../scss/Design.scss'
import doc1 from './images/doc1.png'
import doc2 from './images/doc2.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

class One extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="caseStudy-container1">
          <p className="Backp"><Link className="Back" to="/design/casestudies"><ArrowBackIos className="Back"/></Link></p>
          <p className="caseTitle">Designing a digital health tool for patients at Northwestern</p>
          <div className="content">
          <div className="doc"></div>
          <div className="content1">
              <p>Northwestern Medicine tasked us with creating a mobile app for their patients. Northwestern Medicine attracts individuals with complex conditions seeking world-class specialists and who typically coordinate care with large multi-provider teams. I designed the user experience for the majority of screens, presented and workshopped designs with the Northwestern Medicine team, participated in research, and gathered inputs from stakeholders. As a former emergency medic I was thrilled to be the UX lead designing the patient app for Northwestern Medicine. My favorite design projects are those that augment human ability and let people do more. </p>
              <p className="subtitle">FIND A DOCTOR</p>
          </div>
          <div className="doc2"></div>
          <p className="doc2cap">In our research, we found that adding new providers and care teams was a crucial and frequent task for our primary user-base. In many cases, these patients are older folks who have complex interlocking conditions that require a constantly changing care team in many cases.</p>
          <p className="doc2cap2">Guidance, reassurance, and core usability were critical design concerns since these individuals are also managing a lot of stress and complexity. I designed a guided search feature that walked users through the process of finding new providers step-by-step, with clear explanations of medical jargon,  powerful but simple filters, easy scheduling, and a focused set of criteria describing providers. There's more to say here in terms of the organizational nuance involved with implementing some of these features, but I'll reserve that discussion for another time. You're welcome to <Link to="/contact">contact me</Link> for more information.</p>
          <p className="doc3sub">FIND A LOCATION</p>
          <div className="doc3"></div>
          <p className="doc3cap">Finding new locations was very important for this user base as well, since Northwestern Medicine has countless clinics in and around Chicago. The key challenge for patients here was new locations arose frequently. There was a need to coordinate visits to doctors from work, home, and sometimes children’s school locations. I created both a list view and map view of clinics to help users with varying levels of familiarity with Chicago. Many patients come in from around the country, so we had to account for that fact.</p>
          <p className="doc3cap"> </p>

          <p className="doc4sub">SOME OTHER SCREENS</p>
          <div className="doc4"></div>
          <p className="doc4cap">These screens encompass a few other features worth mentioning: Managing family care across multiple related accounts, readily accessing urgent care, and having medical education at your fingertips. These were all features that aligned well with the most critical problems faced by our user-base. I also wanted to include our home screen design which emphasized access to the human-element: Your care is the first priority, then lab results for fast reassurance, your appointments, messages, and finally bills.</p>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default One
