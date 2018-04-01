import React, { Component } from 'react';
import person from './dataStore2';
const {firstName, email} = person;


class App extends Component {
  render() {
    return (
        <div>
            <p>{firstName} - {email}</p>
        </div>
    )
}
}

export default App;
