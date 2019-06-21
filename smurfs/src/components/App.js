import React, { Component } from 'react';

import SmurfsList from './SmurfsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfsList />
      </div>
    );
  }
}

export default App;

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
