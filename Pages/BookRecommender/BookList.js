import React from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import "../scss/books.scss";

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

  return <ul className="book-list">{linkMarkup}</ul>;
};

export default BookList;

// in src/components/LinkList/LinkList.css
