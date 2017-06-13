import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Footer from './Footer'
import GoldBody from './goldBody'
import Advertisement from './Advertisement'
import Cluster from './ClusterOfArticles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <GoldBody />
          <aside className="large-4 medium-12 columns">
           <Advertisement />
          </aside>
          <Cluster />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
