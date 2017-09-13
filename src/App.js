import React, { Component } from 'react';
import Radium from 'radium';
import {StyleRoot} from 'radium';
import AppContent from './AppContent.js';
import {fadeInDown} from 'react-animations';


class App extends Component {
  render(){
    return(
  <StyleRoot>
        <AppContent />
  </StyleRoot>
    )
  }
}

export default App;
