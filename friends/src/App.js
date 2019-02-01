import React, { Component } from 'react';
import './App.css';
import { FriendListView, FormView} from './views';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <FriendListView />

        <FormView />

      </div>
    );
  }
}

export default App;
