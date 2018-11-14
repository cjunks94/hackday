import React, { Component } from 'react';
import {withRouter} from 'react-router'
import Nav from './Nav';
import Routes from './Routes';
import './App.css';
import { CoursesAdapter } from './Adapters/index.js';

class App extends Component {
  constructor(){
    super()

    this.state ={
      courses:[],
      assetToEdit: {}
    }
  }

  componentDidMount () {
    CoursesAdapter.getCourses().then(resp => this.setState({courses : resp}))
  }



  render() {
    return (
      <div className="App">
        < Nav />
        < Routes thing={this.state.courses} />
      </div>
    );
  }
}

export default App;
