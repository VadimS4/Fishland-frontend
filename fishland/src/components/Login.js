import React, { Component } from 'react';
import '../styling/Login.css'

class Signup extends Component {
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
                                    <div className="ui form">
                                        <h1 className="ui header center aligned loginbox">
                                            <img src="https://static.thenounproject.com/png/969891-200.png" alt="login" className="ui small image" />
                                        <div className="content">
                                            FishLand
                                        </div>
                                        </h1>
                                        <div className="field">
                                            <label>Username:</label>
                                            <div className="ui fluid icon input">
                                                <input name="user_name" type="text" id="user_name"/>
                                                <i className="icon id card"></i>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Password:</label>
                                            <div className="ui fluid icon input">
                                                <input name="user_password" type="password" id="user_password"/>
                                                <i className="icon key"></i>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <button className="ui teal right labeled icon button fluid" type="submit" >Login<i className="icon sign in"></i></button>
                                        </div>
                                    </div>
                                    <div className="ui message">
                                        New User? Sign Up <a href="https://s.codepen.io/voltron2112/debug/PqrEPM?">Here!</a>
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

export default Signup;