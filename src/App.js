import React, { Component } from 'react';
import './App.css';
import {data} from './data.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: {
        first: '',
        last: '',
      },
      city: '',
      country: '',
      employer: '',
      title: '',
      favoriteMovies: ['', '', '']
    }
  }
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h3>Home</h3>
        </div>

        <div className="User-Info">
          <data/>
        </div>

        <div className="Buttons">
          <div className="White-Button1">
            Previous
          </div>
          <div className="Blue-Button">
            Edit
          </div>
          <div className="Blue-Button">
            Delete
          </div>
          <div className="Blue-Button">
            New
          </div>
          <div className="White-Button2">
            Next
          </div>
        </div>
      </div>
    );
  }
}

export default App;
