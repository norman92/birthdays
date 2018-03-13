import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBirthdayCake from '@fortawesome/fontawesome-free-solid/faBirthdayCake'
import Birthdays from './birthdays'
import './../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FontAwesomeIcon icon={faBirthdayCake} size="6x" />
          <h1 className="App-title">Birthdays</h1>
          <Birthdays />
        </header>
      </div>
    );
  }
}

export default App;
