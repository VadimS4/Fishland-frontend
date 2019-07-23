import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Fish from './containers/Fish'
import Login from './components/Login'
import Signup from './components/Signup'
import './styling/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Fish} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;
