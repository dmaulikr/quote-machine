import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';

import Title from './Title.js'

import {fadeInDown} from 'react-animations';



const styles = {
  appContent: {
    textAlign: 'center'
  },
  fadeInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  quoteBox: {
    margin: '0 auto',
    padding: '50px',
    maxWidth: '25%',
    minHeight: '200px',
    backgroundColor: 'aquamarine'
  },
  quoteAuthor: {
    backgroundColor: 'orange',
    textAlign: 'right',
    height: '15%',
    marginTop: '50px'
  }
}


class AppContent extends Component {
  constructor() {
    super();
    this.state = {
      quote: '',
      quoteAuthor: ''
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  getRandomQuote() {
    return axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
      .then((response) => {

        console.log(response);
        var author;


          (response.data.quoteAuthor === "") ?  author = "Anonymous" : author = response.data.quoteAuthor;
          this.setState( {quote: response.data.quoteText, quoteAuthor: author} );

      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
        <div className="App" style={ styles.app }>
          <Title words="Quote Machine"/>
          <div className="quote-box" style={ styles.quoteBox }>
            <h2 className="quote-text" style={ styles.fadeInDown }>{ this.state.quote }</h2>
            <h3 className="quote-author" style={ styles.fadeInDown, styles.quoteAuthor }>{ this.state.quoteAuthor }</h3>
          </div>
          <button className="" onClick={ this.getRandomQuote }>Retrieve A Quote</button>
        </div>
    );
  }
}

AppContent = Radium(AppContent);

export default AppContent
