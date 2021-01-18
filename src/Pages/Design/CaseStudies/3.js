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
import fw2 from './images/fw2.png'
import fwblog from './images/fwblog.png'
import fwhome from './images/fwhome.png'
import brand from './images/brand.png'
import brand1 from './images/brand2.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

class Three extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="caseStudy-container1">
          <p className="Backp"><Link className="Back" to="/design/casestudies"><ArrowBackIos className="Back"/></Link></p>
          <p className="caseTitle">Helping engineers tell their story through design</p>
          <img src={fwhome} className="fwsite"/>
          <div className="content2">
              <p>Mind-blindness is the biggest obstacle stopping technical people from connecting with their users. When you have deep knowledge of a domain, it's easy to misperceive the level of understanding your users have. You have rich context, background, and a deep well of references that cause you to hear a symphony where non-technical people hear crickets.</p>
              <p>Helping my time connect more effectively with our users was a focus for me at KPMG Deal Advisory. I devised a content strategy, branding, and designed/coded a team website and blog.</p>
              <p>I based my communication strategy on Chip Heath's investigations into what makes ideas stick at Stanford and Jonathan Haidt's research into how moral intuitions color our perception of messaging at NYU. Our branding was based around brand attributes that we generated during branding exercises that I ran: Intelligence, speed, and simplicity.</p>
              <p className="subtitle">CONTENT STRATEGY</p>
              <p>The way I gained buy-in for my storytelling initiative was by having them participate directly in the process from the beginning. I picked two of our most respected senior engineers and had them co-develop and co-present materials with me to the team on the how and why of using my principles of good communication. We created examples that were directly relevant to the team like launch emails, blog posts, and feature updates and broke them down in terms of effectiveness and impact.</p>
              <p>I also made sure to describe and emphasize research that shows people can be taught to communicate more impactfully, because it can be daunting to take on an ambiguous task like telling your story more effectively, and I wanted to make sure people know they can learn how to be great at this. For reference, the principles we emphasized were simplicity, unexpectedness, concreteness, credibility, emotional salience, and story-centricity. I used examples from our own context and also great examples from companies such as Google, SpaceX, Apple, Stripe, and others.</p>
              <p className="subtitle">BRANDING</p>
              <p>I conducted mind-mapping exercises to help people think through the attributes we wanted users to associate with our brand. Once we narrowed down our attributes and brand colors, I generated a vast array of ideas for our brand identity. </p>
              <img src={brand} className="ipo"/>
              <p>Through iteration we narrowed down to a more refined logo for our team, and came up with logos for each app as well, color categorized by use case. I also created other brand assets such as go-to-market materials, stickers, email headers, macro icons, desktop icons for on-prem users, and our team website.</p>
              <img src={brand1} className="ipo"/>
              <p className="subtitle">DESIGNING AND CODING THE WEBSITE</p>
              <p>I performed discovery interviews to figure out what would be the most impactful information and prioritization of content for our users, and then wireframed some mockups for the site. I did some usability testing with my wireframes, then I created a UI that was consistent with the branding and aesthetic of our apps. </p>
              <p>The site was coded using Ruby, HTML, CSS, javascript, and a CSS pre-processor called Sass. While I prefer the stack used to code this portfolio site, I did fall atleast partially in love with the bizarre quirks of Ruby, though it’ll take me a lot more reps to be able to effectively use monkey-patching and meta-programming to anywhere near their true potential.</p>
              <p>I had significant cross-browser and cross-platform challenges with coding this site, but using an emulator, and significantly refactoring the code to account for various contextual idiosyncrasies, we were able to launch the site. Sadly, I lost my wireframes and due to some technical issues, but the images below are good samples of what the site looks like in code.</p>
              <img src={fwblog} className="fwblog"/>
              <img src={fw2} className="fwblog"/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Three
