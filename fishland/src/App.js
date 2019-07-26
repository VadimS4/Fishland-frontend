import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Fish from './containers/Fish';
import Login from './components/Login';
import Favorites from './components/Favorites'
import Signup from './components/Signup';
import FishInfo from './components/FishInfo';
import './styling/App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      fishes: [],
      currentFish: []
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/fish")
    .then(resp => resp.json())
    .then(json => {
      this.setState({ fishes: json }, () => console.log(this.state.fishes))
    })
  }

  getProfile = () => {
    let token = localStorage.getItem('jwt')
    fetch('http://localhost:3000/api/v1/profile', {
      headers: {'Authorization': 'Bearer ' + token}
    })
    .then(resp => resp.json())
    .then(json => {
      console.log('Profile:', json)
      this.setState({ user: json.user })
    })
  }

  // getSignUp = (event, person) => {
  //   event.preventDefault()
  //   console.log(person)

  //   let username = person.username
  //   let password = person.password
    
  //   if (person.confirm_password === person.password) {
  //     password = person.password
  //   } else {
  //     console.log("Passwords Dont Match")
  //   }

  //   fetch('http://localhost:3000/api/v1/new', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ user: { username, password }})
  //   })
  //   .then(resp => resp.json())
  //   .then(json => {
  //     console.log('login:', json)
  //     if (json&& json.jwt) {
  //       this.saveToken(json.jwt)
  //       this.setState({ user: { username }})
  //     }
  //   })
  //   .then(() => {
  //     this.getProfile()
  //   })
  // }

  logout = () => {
    this.clearToken()
    this.setState({ user: '' })
    console.log('Logged Out:')
  }

  getToken(jwt) {
    return localStorage.getItem('jwt')
  }

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  clearToken(jwt) {
    localStorage.setItem('jwt', '')
  }

  handleClick = (fish) => {
    this.setState({
      selectedFish: fish
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar onLogout={this.logout} />
          <Route exact path="/" render={(props) => <Fish {...props} fishes={this.state.fishes} handleClick={this.handleClick} /> } />
          <Route path="/login" render={(props) => <Login {...props} onLogin={this.getProfile} onLogout={this.logout} /> } />
          <Route path="/signup" render={(props) => <Signup {...props} onSignUp={this.getSignUp} /> } />
          <Route path="/favorites" render={(props) => <Favorites {...props} user={this.state.user} handleClick={this.handleClick} /> } />
          <Route path="/fish" render={() => <FishInfo selectedFish={this.state.selectedFish}/> } />
        </div>
      </Router>
    );
  }
}

export default App;
