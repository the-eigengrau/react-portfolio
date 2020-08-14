import React from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import "../scss/books.scss";
import "../scss/desktopbooks.scss";

const BookList = (props) => {
  const linkMarkup = props.options.map((book) => (
    <li  className="link-list-item">
    <Accordion id={book.id} className="Accordion">
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon />
        }
        aria-controls="panel1a-content"
        id="panel1a-header">
          {book.title}
      </AccordionSummary>
      <AccordionDetails>
        <div className="grid">
          <img src={book.image} />
          <a href={book.link}>Get it here</a>
          <div className="text">
            <h1></h1>
            <p>{book.description}</p>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
    </li>
  ));

  const desktopLinkMarkup = props.options.map((book) => (
    <li  className="link-list-item">
    <div id={book.id} className="book">
    <p className="title">{book.title}</p>
        <div className="grid">
          <img src={book.image} />
          <a href={book.link}>Get it here</a>
          <div className="text">
            <h1></h1>
            <p>{book.description}</p>
          </div>
        </div>
    </div>
    </li>
  ));

  return <React.Fragment><ul className="book-list">{linkMarkup}</ul><ul className="desktop-book-list">{desktopLinkMarkup}</ul></React.Fragment>;
};

export default BookList;

// in src/components/LinkList/LinkList.css
