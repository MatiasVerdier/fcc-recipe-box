import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const ListRecepies = () => <h1>List Recepies</h1>;

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={ListRecepies} />
            </div>
        </Router>
    );
  }
}

export default App;
