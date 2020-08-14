import React, { Component } from 'react';
import BookOptions from './BookOptions';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import '../scss/books.scss';
import "../scss/desktopbooks.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './Config.js';

//Can use this library to do a conversational UI
//https://www.npmjs.com/package/react-typing-animation

class BookRecommendations extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="chatbot">
          <p className="Backp"><Link className="Back" to="/"><ArrowBackIos className="Back"/></Link></p>
          <p className="designTitle">Ayon's Book Recommendations</p>
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </div>
      </React.Fragment>
    );
  }
}

export default BookRecommendations
