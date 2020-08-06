import React, { Component } from 'react';
import './scss/books.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Can use this library to do a conversational UI
//https://www.npmjs.com/package/react-typing-animation

class BookRecommendations extends Component {

  render(){
    return (
      <React.Fragment>
        <div className="coding">
            <p><Link className="Link" to="/">Back</Link></p>
          <p>Design Portfolio</p>
        </div>
      </React.Fragment>
    );
  }
}

export default BookRecommendations
