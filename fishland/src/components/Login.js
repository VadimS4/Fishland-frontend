import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styling/Login.css'

class Signup extends Component {

    state = {
        username: '',
        password: ''
    }

    constructor() {
        super()
        this.username = React.createRef()
        this.password = React.createRef()

        if (this.getToken()) {
            console.log('You have a user already', this.state)
        }
        this.logout = this.logout.bind(this)
    }

    getLogin = (event) => {
        event.preventDefault()
        console.log('Log In')

        let username = this.username.current.value
        let password = this.password.current.value

        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: { username, password } })
            })
            .then(resp => resp.json())
            .then(json => {
                console.log('Login:', json)
                if (json && json.jwt) {
                    this.saveToken(json.jwt)
                    this.props.onLogin()
                }
            })
            .then(() => {
                if (username === '' || password === '') {
                    alert('Do Not Leave Fields Blank')
                } else {
                    this.props.history.push('/')
                }
            })
            .catch(err => console.log(err))
    }

    logout(event) {
        this.props.onLogout(event)
    }

    saveToken(jwt) {
        localStorage.setItem('jwt', jwt)
    }

    clearToken(jwt) {
        localStorage.setItem('jwt', '')
    }

    getToken(jwt) {
        return localStorage.getItem('jwt')
    }

    render() {
        return (
            <div className="title">
                <h1>Welcome to FishLand</h1>
            </div>,
            <div className="login">
                <img src="https://i.pinimg.com/originals/c6/36/a5/c636a55ceaa788210ec7edd0af4bbf2f.jpg" alt="fishpic"/>
                <div className="ui  container">
                    <div className="ui grid center aligned">
                        <div className="row">
                            <div className="sixteen wide tablet six wide computer column catcpa">
                                <div className="ui left aligned segment" id="loginbox">
                                    <form className="ui form" >
                                        <h1 className="ui header center aligned loginbox">
                                            <img src="https://static.thenounproject.com/png/969891-200.png" alt="login" className="ui small image" />
                                        <div className="content">
                                            FishLand
                                        </div>
                                        </h1>
                                        <div className="field">
                                            <label>Username:</label>
                                            <div className="ui fluid icon input">
                                                <input name="user_name" type="text" placeholder="username" ref={this.username}/>
                                                <i className="icon id card"></i>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Password:</label>
                                            <div className="ui fluid icon input">
                                                <input name="user_password" type="password" placeholder="Password" ref={this.password}/>
                                                <i className="icon key"></i>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <button className="ui teal right labeled icon button fluid" type="submit" onClick={this.getLogin} >Login<i className="icon sign in"></i></button>
                                        </div>
                                    </form>
                                    <div className="ui message">
                                        New User? Sign Up <a href="/signup">Here!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup);