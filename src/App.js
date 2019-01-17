import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import EventVote from './containers/Eventvote/Eventvote';

class App extends Component {
  render() {
    return (
      <div>
        <Layout/>
      </div>
    );
  }
}

export default App;
