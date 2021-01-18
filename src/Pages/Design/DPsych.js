import React, { Component } from 'react';
import './SCSS/Design.scss';
import './SCSS/DesignPsych.scss';
import './SCSS/DesktopDesignPsych.scss';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import CaseStudies from './CaseStudies/CaseStudies.js'
import DDPsych from './DesktopDPsych.js'

import fogg from './Psychology/Fogg.png';
import fogg1 from './Psychology/Fogg2.png';
import motiv from './Psychology/motiv1@2x.png';
import motiv2 from './Psychology/motiv2@2x.png'
import bartle from './Psychology/bartle@2x.png'
import hanks from './Psychology/wilson.jpg'

import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {FiChevronsDown} from 'react-icons/fi';

import {
  Route,
  Link,
  Switch
} from "react-router-dom";

class DPsych extends Component {

  componentDidMount() {

  Events.scrollEvent.register('begin', function () {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register('end', function () {
    console.log("end", arguments);
  });

}
  //animate this button
  render(){
    return (
      <React.Fragment>
        <div className="design">
          <p className="Backp"><Link className="Back" to="/"><ArrowBackIos className="Back"/></Link></p>
          <p className="designTitle">Design Portfolio</p>
          <div className="designToggle">
            <div>
              <Link className="NonSelected" to="/design/casestudies">UX/UI</Link>
            </div>
            <div>
              <Link className="Selected" to="/design/psych">Applied<br/>Psychology</Link>
            </div>
            <div>
              <Link className="NonSelected" to="/design/graphics">Graphic<br/>Design</Link>
            </div>
          </div>
          <div className="border"></div>
          <div className="DPsych">
          <div className="intro">
            <p className="good">Psychology is the foundation of good design.<br/></p>
            <p className="introDesktop">I was a psychological researcher for several years, participating in research focused on priming effects, the inter-generational effects of trauma, and self-presentation in disparate contexts. </p>
            <p>Here's a small sample of how I apply psychological knowledge as a designer.</p>

          </div>
          <DDPsych/>

          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
                Triggering User Action
            </AccordionSummary>
            <AccordionDetails>
              <div className="body">
                <p>User action results from a combination of motivation and ability (Fogg, 2009). </p>
                <img src={fogg}/>
                <p>Different types of actions and user populations will require distinct types of action triggers. <strong>Sparks</strong> spur action using motivational elements. <strong>Facilitators</strong> enable users with ability-augmentation. <strong>Signals</strong> are straight-forward, unadorned triggers.</p>
                <img src={fogg1}/>
                <p>I have lots more to say about this, so if you're interested <a href = "mailto:ayon.b@protonmail.com">let's talk about it.</a></p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
                Basis of Motivation
            </AccordionSummary>
            <AccordionDetails>
              <div className="body">
              <p>User motivation is less concrete and harder to grasp than augmenting user abilities or reducing friction.
                 A good place to start is to understand the qualities and effects of intrinsic vs. extrinsic motivation.</p>
              <img src={motiv}/>
              <p>What intrinsic motivation looks like in the context of software is choice, exploration, individualization, and meaningful explanations for boundaries.
                 Extrinsic motivation in a UX context involves the use of urgency, deadlines (I’m looking at you, OpenTable), external rewards, and hazards.
                 You want to leverage extrinsic motivation sparingly and in cases that require extreme focus, urgency, or effort expenditure.
                 Over time, we usually want users to transition to internal motivation, since it produces higher performance, more exploration, and much more engagement. Here is a model for how that transition works:</p>
              <img src={motiv2}/>
              <p>A simple example of how this would work in software is to begin with a narrow, focused set of tasks for onboarding, maybe with a peer learning component or with points and badges as external motivators,
                then gradually open up the number of choices and paths available as the user progresses through the software, encouraging exploration and internally motivated usage.</p>
              <p>For concrete examples and much greater detail <a href = "mailto:ayon.b@protonmail.com">get in touch.</a></p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
                Bartle’s User Types
            </AccordionSummary>
            <AccordionDetails>
              <div className="body">
              <p>People approach game-like situations in different ways depending upon their temperament, inclination towards people vs. things, and whether they prefer to act upon or interact with others. (Bartle, 1996).
                 <br/><br/>Upon some reflection we see that game-like situations are also extremely broad, encompassing everything from work, to clearing your inbox, to witty repartee. Bartle’s Player Types have been shown to predict
                 educational attainment, for example, demonstrating that although they were discovered in a gaming context, what they tap into is something much more broadly applicable (Park and Kim, 2017).
              </p>
              <img src={bartle}/>
              <p><strong>Achievers:</strong> These users act upon the world in order to achieve success, accumulate awards, and amass points.
                <br/><br/>
                They are motivated by status, friendly competition, wealth, success, setting and pursuing goals, and cooperating to take on greater challenges.
                <br/><br/>
                <strong>Killers:</strong> The online troll is the quintessential killer, someone who likes to act upon people, usually in order to win against them. This player type requires the most management in order to maintain the health of digital communities.
                <br/><br/>
                <strong>Socializers:</strong> These folks use the game as a backdrop for social interaction. This is the most common player type in most environments.
                <br/><br/>
                They are motivated by building relationships, getting to know people, observing others, joking, listening, and entertaining.
                <br/><br/>
                <strong>Explorers:</strong>  The world is full of secrets, hidden machinations, new powers, undiscovered regions, and this player wants to see it all. This is typically the rarest player type in most games.
                <br/><br/>
                Explorers can sometimes look like achievers because their constant discovery of new powers, resources, and areas of the game can lead to material success. However, they are primarily motivated by a sense of wonder and the accumulation of knowledge.
                <br/><br/>
                This is my player type, for the record.
                <br/><br/>
                There’s a lot more to say here as always, specifically about tilting the balance of a piece of software towards action, interaction, users, or the information environment itself. If you’re curious and want to learn more, <a href = "mailto:ayon.b@protonmail.com">let’s chat</a> about it sometime.
              </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
                Anthropomorphic Computing
            </AccordionSummary>
            <AccordionDetails>
              <div className="body">
              <p>
              Human naturally anthropomorphize computers and systems that are built to encourage this are more persuasive and likable. (Nass et al, 1994).
              <br/><br/>
              The empirical evidence for this is broad (Kim and Sundar, 2012). People observe social rules with software, getting into reciprocal/retaliatory relationships. Computers influence people through modifying levels of social support. People engage in impression management with computers and are more truthful to computers when they are in closer proximity to them. Individuals have also been observed to model behaviors seen on-screen.
              <br/><br/>
              Three primary factors dictate anthropomorphizing behavior (Waytz et al, 2010).
              <br/><br/>
              <strong> I. Effectance:</strong> We seek to reduce uncertainty and ease our interactions with inanimate agents. Anthropomorphizing behavior describes agents and suggests ways of responding to them.
              <br/><br/>
              <strong> II. Agent Knowledge:</strong> If an object activates human-related knowledge in our minds, we’re more likely to anthropomorphize it. So if a piece of software has human-like features, movements, language, tone of voice, and behavior we’ll be more likely to treat it as a social agent. Think UI animation, chat bots, good UX writing, rewarding modalities like points and badges.
              <br/><br/>
              <strong> III. Sociality:</strong>  When people are lonely or lacking in social connection, they are more likely to anthropomorphize inanimate objects.
              <br/><br/>
              <img src={hanks}/>
              <br/><br/>
              Here are some simple ways to translate this body of research into software:
              <br/><br/>
              🤝 <strong> Use reciprocity:</strong>  When a user gives the application something, including attention or time, the app should provide something dopaminergicaly salient in return.
              <br/><br/>
              🤖 <strong> Human form:</strong> Using elements of the human form elicits anthropomorphizing responses from users. This can be obvious like the paper-clip guy in MS word back in the day, or more subtle cues in the UI.
              <br/><br/>
              🌹 <strong> Leverage praise:</strong> Having your application praise users for taking desirable actions promotes a feeling of connection.
              <br/><br/>
              🃏 <strong> Unpredictability:</strong> When a software system shows quirks or some amount of unpredictability, we tend to humanize it.
              <br/><br/>
              🌅 <strong> More user freedom:</strong> Increasing the number of options available to users increases uncertainty and amplifies the effectance motivation.
              <br/><br/>
              🎤 <strong> Voice and tone:</strong> A conversational written or audible tone throughout the application makes software more relatable.
              <br/><br/>
              <a href="mailto:ayon.b@protonmail.com">Ask me</a> more about it.
              </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
                Psychology of Digital Communities
            </AccordionSummary>
            <AccordionDetails>
              <div className="body">
              <p>
                Social software is now the norm. The majority of software today features a community component, and understanding the psychology of digital communities is critically important .
                <br/><br/>
                When we’re assessing or designing a digital community, the three questions to ask first are related to people, purpose, and policies. Who uses this site, why, and by what formal/informal rules do they operate?
                <br/><br/>
                Understanding this, we can cater the language, interaction styles, and feature set of the application to accommodate the community.
                <br/><br/>
                One of the biggest challenges in social software is motivating newcomer contribution (Burke et al, 2009). Research has found four major ways to encourage new users to participate:
                <br/><br/>
                🤜🤛<strong> Learning from friends:</strong> People learn social behavior by observation. Newcomers whose friends share more content will contribute more themselves. In research on Slashdot it was shown that the number of pages read before a user posted their first comment was correlated with a higher quality score.
                <br/><br/>
                👇<strong> Singling out:</strong> When people are directly engaged by others one-on-one in a social software context, they contribute more content. This can be in the form of tags, comments, or private messages. This can be also be simulated programmatically by having a chatbot send a user a message early on in their tenure on the site.
                <br/><br/>
                👌<strong> Feedback:</strong> Post-contribution nudging from other users, especially to your first post on a site is a significant predictor of long-term engagement with that site. This is related to theories of reciprocity and reinforcement, as well as identification and the need to belong.
                <br/><br/>
                👐<strong> Content distribution:</strong> Reputation is a common motivation for participants, especially on activity-focused sites. There is a strongly competitive undertone to contribution in activity-based platforms such as professional blogs, open-source software, and wikis.
                <br/><br/>
                Aside from newcomer contribution and a framework for assessing digital communities, we could delve more deeply into how individual differences affect contribution to social sites, how emotion is expressed in computer mediated contexts, the importance of expressive range and labelling in enhancing digital communication, but we can’t do it all in this snippet.
                <br/><br/>
                <a href="mailto:ayon.b@protonmail.com">Get in touch</a> and we can discuss it further.
              </p>
              </div>
            </AccordionDetails>
          </Accordion>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DPsych
