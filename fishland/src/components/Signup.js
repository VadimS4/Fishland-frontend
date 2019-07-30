import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import { Form } from 'semantic-ui-react';
import '../styling/Signup.css';

class Login extends Component {

    constructor(){
        super()
        this.state = {
            name: '',
            username: '',
            password: '',
            // confirm_password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    getSignUp = (event) => {
        event.preventDefault()
        console.log('signup:', this.state)

        let name = this.state.name
        let username = this.state.username
        let password = this.state.password

        fetch('http://localhost:3000/api/v1/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: { name, username, password } })
        })
            .then(resp => resp.json())
            .then(json => {
                console.log('login:', json)
                if (json && json.jwt) {
                    this.props.saveToken(json.jwt)
                    this.setState({ user: json })
                }
            })
            .then(() => {
                this.props.getProfile()
                this.props.history.push('/')
            })
    }

    render() {
        return (
            <div className="signup">
                <div className="ui  container">
                    <div className="ui grid center aligned">
                        <div className="row">
                            <div className="sixteen wide tablet six wide computer column catcpa">
                                <div className="ui left aligned segment" id="signupbox">
                                    <form className="ui form" onSubmit={this.getSignUp}>
                                        <h1 className="ui header center aligned loginbox">
                                            <img src="https://static.thenounproject.com/png/969891-200.png" alt="login" className="ui small image" />
                                            <div className="content">
                                                FishLand
                                        </div>
                                        </h1>
                                        <div className="field">
                                            <label>Name: </label>
                                            <Form.Field>
                                            <div className="ui fluid icon input">
                                                <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} required/>
                                                <i className="icon id badge"></i>
                                            </div>
                                            </Form.Field>
                                        </div>
                                        <div className="field">
                                            <label>Username:</label>
                                            <Form.Field>
                                            <div className="ui fluid icon input">
                                                <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} required/>
                                                <i className="icon id card"></i>
                                            </div>
                                            </Form.Field>
                                        </div>
                                        <div className="field">
                                            <label>Password:</label>
                                            <Form.Field>
                                            <div className="ui fluid icon input">
                                                <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                                                <i className="icon key"></i>
                                            </div>
                                            </Form.Field>
                                        </div>
                                        {/* <div className="field">
                                            <label>Confirm Password:</label>
                                            <Form.Field>
                                            <div className="ui fluid icon input">
                                                <input name="confirm_password" type="password" placeholder="Confirm Password" value={this.state.confirm_password} onChange={this.handleChange} required/>
                                                <i className="icon key"></i>
                                            </div>
                                            </Form.Field>
                                        </div> */}
                                        <div className="field">
                                            <button className="ui teal right labeled icon button fluid" type="submit">Sign Up!<i className="icon sign in"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);