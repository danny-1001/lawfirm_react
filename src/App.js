import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhoWeAre from './views/who_we_are';
import WhatWeDo from './views/what_we_do';
import ContactUs from './views/Contact';
import WhereWeWork from './views/where_we_work';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  render() {
    // console.log("Component rendered");

    return (
      <div className="whiteBackground">
        <header>
          <Navbar />
        </header>

        <main className="container">

          <Switch>
            <Route exact path='/who_we_are' render={() => <WhoWeAre />} />
            <Route path='/contact' render={() => <ContactUs />} />
            <Route exact path='/what_we_do' render={() => <WhatWeDo />} />
            <Route exact path='/where_we_work' render={() => <WhereWeWork />} />
          </Switch>

        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    )
  }
}