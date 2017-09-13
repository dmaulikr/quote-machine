import React, { Component } from 'react';
import axios from 'axios';
import Radium from 'radium';

import Title from './Title.js'

import {fadeInDown} from 'react-animations';
// import './App.css';



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
    backgroundColor: '#FFF586',

  },
  quoteText: {
    fontFamily: 'Fira Sans'
  },
  quoteAuthor: {
    textAlign: 'right',
    height: '15%',
    marginTop: '50px',
    fontFamily: 'Fira Sans',
    fontStyle: 'italic'
  },
  button: {
    marginTop: '50px',
    color: 'white',
    backgroundColor: 'blue',
    height: '60px',
    width: '300px',
    borderRadius: '31px',
    borderStyle: 'none',
    fontSize: '30px',
    fontFamily: 'Eczar, serif',
    ':hover': {
                borderStyle:'solid',
                borderWidth: '3px',
                borderColor: '#9FFFF2',
                cursor: 'pointer' }

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
        <div className="app" style={ styles.appContent }>
          <Title words="QUOTE MACHINE" style={styles.title}/>
          <div  style={ styles.quoteBox }>
            <h2  style={styles.quoteText }>{ this.state.quote }</h2>
            <h2  style={  styles.quoteAuthor }>{ this.state.quoteAuthor }</h2>
          </div>
          <button  onClick={ this.getRandomQuote } style={ styles.button}>Retrieve a Quote</button>
        </div>
    );
  }
}

AppContent = Radium(AppContent);

export default AppContent
