import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch ,Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=5;
  state = {
    progress:0
  }
  setProgress = (progress)=>{
      this.setState({progress:progress})
  }
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={99}
      />
        <switch>
          
        <Route exact  path="/business"> <News setProgess={this.setProgress}  key="business" pageSize={5} country="in" category="business"/></Route>
        <Route  exact path="/sports"> <News setProgess={this.setProgress}  key ="sports" pageSize={5} country="in" category="sports"/></Route>
        <Route exact path="/science"> <News setProgess={this.setProgress}  key="science" pageSize={5} country="in" category="science"/></Route>
        <Route exact path="/entertainment"> <News setProgess={this.setProgress}  key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
        <Route exact path="/health"> <News setProgess={this.setProgress}  key="health" pageSize={5} country="in" category="health"/></Route>
        <Route exact path="/technology"> <News setProgess={this.setProgress}  key="technology" pageSize={5} country="in" category="technology"/></Route>

        </switch>
      </Router>
      </div>
    )
  }
}
