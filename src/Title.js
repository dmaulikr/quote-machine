import React, { Component } from 'react';
import Radium from 'radium';

const titleStyles = {
  h1: {
    letterSpacing: '2px',
    fontFamily: 'Eczar, serif',
    color: 'white'}
}

class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1 style={titleStyles.h1}>{this.props.words}</h1>
      </div>
    );
  }
}

Title = Radium(Title);

export default Title;
