import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFish, getUserProfile, logUserOut } from './actions/appActions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      // fishes: [],
      currentFish: null,
      // user: null
    }
  }

  componentDidMount() {
    this.props.getFish()
    this.props.getUser()
    // fetch("http://localhost:3000/api/v1/fish")
    // .then(resp => resp.json())
    // .then(json => {
    //   this.setState({ fishes: json }, () => console.log(this.state.fishes))
    // })
  }

  getProfile = () => {
    this.props.getUser()
      // fetch('http://localhost:3000/api/v1/profile', {
      //   headers: {'Authorization': 'Bearer ' + token}
      // })
      // .then(resp => resp.json())
      // .then(json => {
      //   console.log('Profile:', json.user)
      //   this.setState({ user: json.user })
      // })
  }

  logout = () => {
    this.props.logoutUser()
    console.log('Logged Out')
  }

  getToken() {
    return localStorage.getItem('jwt')
  }

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  handleClick = (fish) => {
    let fish_id = fish.id.toString()
    console.log(fish_id)
    fetch('https://fishland-backend.herokuapp.com/api/v1/fish/' + fish_id)
    .then(resp => resp.json())
    .then(json => {
      this.setState({ currentFish: json}, () => console.log(this.state.currentFish))
    })
  }

  addToFavorites = (fish) => {
    let fish_id = fish.selectedFish.id
    let user_id = this.props.user.id

    fetch('https://fishland-backend.herokuapp.com/api/v1/newfav', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ favorite: {user_id, fish_id} })
    })
    .then(() => this.props.getUser())
    .catch(err => console.log(err))
  }

  removeFromFavorites = (fish) => {
    let fish_id = fish.selectedFish.id
    let favorite_id = null
    let token = this.getToken()

    this.props.user.favorites.forEach(favorite => {
      if (favorite.fish_id === fish_id) {
        favorite_id = favorite.id
      }
    })

    fetch(`https://fishland-backend.herokuapp.com/api/v1/unfav/${favorite_id}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + token}
    })
    .then(resp => resp.json())
    .then(() => this.props.getUser())
    .catch(err => console.log(err))
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="app">
            <Navbar />
            <Route exact path="/" render={(props) => <Fish {...props} handleClick={this.handleClick} addToFavorites={this.addToFavorites} />} />
            <Route path="/login" render={(props) => <Login {...props} saveToken={this.saveToken} getToken={this.getToken} />} />
            <Route path="/signup" render={(props) => <Signup {...props} onSignUp={this.getSignUp} saveToken={this.saveToken} />} />
            <Route path="/favorites" render={(props) => <Favorites {...props} handleClick={this.handleClick} />} />
            <Route path="/fish" render={() => <FishInfo selectedFish={this.state.currentFish} addToFavorites={this.addToFavorites} removeFromFavorites={this.removeFromFavorites} />} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    fishes: state.appReducer.fishes,
    user: state.appReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFish: () => {(fetchFish(dispatch))},
    getUser: () => {(getUserProfile(dispatch))},
    logoutUser: () => {(logUserOut(dispatch))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
