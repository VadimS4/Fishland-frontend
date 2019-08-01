import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../actions/appActions'
import { withRouter } from 'react-router-dom';
import '../styling/Login.css'
import { Form, Message, Icon } from 'semantic-ui-react';

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    getLogin = (event) => {
        event.preventDefault()
        console.log('Log In')

        let username = this.state.username
        let password = this.state.password

        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user:{ username, password } })
            })
            .then(resp => resp.json())
            .then(json => {
                console.log('Login:', json)
                if (json && json.jwt) {
                    this.props.saveToken(json.jwt)
                    this.props.getUser()
                    this.props.history.push('/')
                } else {
                    alert("Incorrect Username or Password")
                }
            })
            .catch(err => console.log(err))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    filterLogin = () => {
        if (this.props.user) {
            return (
                <div>
                    <Message icon className="alreadyLoggedIn">
                        <div className="loading">
                            <Icon name='sync' loading/>
                        </div>
                        <Message.Content className="messageContent">
                            You are already Logged in!
                        </Message.Content>
                    </Message>
                </div>
            )
        } else {
            return (
                <div className="title">
                    <h1>Welcome to FishLand</h1>
                </div> ,
                <div className="login">
                    <div className="login_img">
                        <img src="https://wallpaperaccess.com/full/537999.jpg" alt="fishpic" />
                    </div>
                    <div className="ui  container">
                        <div className="ui grid center aligned">
                            <div className="row">
                                <div className="sixteen wide tablet six wide computer column catcpa">
                                    <div className="ui left aligned segment" id="loginbox">
                                        <form className="ui form" onSubmit={this.getLogin}>
                                            <h1 className="ui header center aligned loginbox">
                                                <img src="https://static.thenounproject.com/png/969891-200.png" alt="login" className="ui small image" />
                                                <div className="content">
                                                    FishLand
                                        </div>
                                            </h1>
                                            <div className="field">
                                                <label>Username:</label>
                                                <Form.Field>
                                                    <div className="ui fluid icon input">
                                                        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange} required />
                                                        <i className="icon id card"></i>
                                                    </div>
                                                </Form.Field>
                                            </div>
                                            <div className="field">
                                                <label>Password:</label>
                                                <Form.Field>
                                                    <div className="ui fluid icon input">
                                                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
                                                        <i className="icon key"></i>
                                                    </div>
                                                </Form.Field>
                                            </div>
                                            <div className="field">
                                                <button className="ui teal right labeled icon button fluid" type="submit">Login<i className="icon sign in"></i></button>
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

    render() {
        return (
            <div>
                {this.filterLogin()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.appReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => { (getUserProfile(dispatch)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));