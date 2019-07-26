import React, { Component } from 'react';
import '../styling/Signup.css'

class Login extends Component {
    render() {
        return (
            <div className="signup">
                <div className="ui  container">
                    <div className="ui grid center aligned">
                        <div className="row">
                            <div className="sixteen wide tablet six wide computer column catcpa">
                                <div className="ui left aligned segment" id="signupbox">
                                    <div className="ui form">
                                        <h1 className="ui header center aligned loginbox">
                                            <img src="https://static.thenounproject.com/png/969891-200.png" alt="login" className="ui small image" />
                                            <div className="content">
                                                FishLand
                                        </div>
                                        </h1>
                                        <div className="field">
                                            <label>Name: </label>
                                            <div className="ui fluid icon input">
                                                <input name="user_name" type="text" />
                                                <i className="icon id badge"></i>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Username:</label>
                                            <div className="ui fluid icon input">
                                                <input name="username" type="text" />
                                                <i className="icon id card"></i>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Password:</label>
                                            <div className="ui fluid icon input">
                                                <input name="user_password" type="password" />
                                                <i className="icon key"></i>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Confirm Password:</label>
                                            <div className="ui fluid icon input">
                                                <input name="confirm_user_password" type="password" />
                                                <i className="icon key"></i>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <button className="ui teal right labeled icon button fluid" type="submit">Sign Up!<i className="icon sign in"></i></button>
                                        </div>
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

export default Login;