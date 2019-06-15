import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  // API URL constant for re-use
  API_URL = 'http://localhost:3333/smurfs';

  // GET /smurfs API end point
  getSmurfs = () => {
    axios
      .get(this.API_URL)
      .then(res => {
        this.setState({ smurfs: [...res.data] });
      })
      .catch(err => {
        console.error(err);
      });
  };

  // POST /smurfs API endpoint
  postSmurf = smurf => {
    axios
      .post(this.API_URL, smurf)
      .then(() => {
        this.getSmurfs();
      })
      .catch(err => {
        console.error(err);
      });
  };

  // Loading SmurfDB through ComponentDidMount
  componentDidMount() {
    this.getSmurfs();
  }

  render() {
    const { postSmurf } = this;
    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} postSmurf={postSmurf} />}
        />
      </div>
    );
  }
}

export default App;
