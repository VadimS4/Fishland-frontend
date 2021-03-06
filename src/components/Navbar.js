import React, { Component } from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import '../styling/Navbar.css'
import { withRouter } from 'react-router-dom';
import { logUserOut } from '../actions/appActions';

class Navbar extends Component {

    handleLogIn = () => {
        this.props.history.push('/login')
    }

    handleLogOut = (event) => {
        event.preventDefault()
        this.props.logoutUser()
        this.props.history.push('/login')
    }

    handleFavorites = () => {
        this.props.history.push('/favorites')
    }

    handleHome = () => {
        this.props.history.push('/')
    }

    logged_in = () => {
        if (!this.props.user) {
            return (
                <h4>Please Log In</h4>
            )
        } else {
            return (
                <h4>Welcome, {this.props.user.name}!</h4>
            )
        }
    }


    render(){

        return (
            <div className='navbar'>
                <Menu attached="top" className="mynav">
                    <Dropdown item icon="bars" className="sandwitchmenu" simple>
                        <Dropdown.Menu className="dropdown">
                            <Dropdown.Item>
                                <Icon name='dropdown' />
                                <span className="text">Open</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={this.handleFavorites} >Favorites</Dropdown.Item>
                                    <Dropdown.Item onClick={this.handleHome} >Home Page</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>Catch Progress</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Settings</Dropdown.Header>
                            <Dropdown.Item>Edit Account</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleLogIn} >Log In</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleLogOut} >Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Menu >
                        <div className='title'>
                            <h1>FishLand</h1>
                        </div>
                    </Menu.Menu>
                    <Menu.Menu >
                        <div className='profile'>
                            {this.logged_in()}
                        </div>
                    </Menu.Menu>
                </Menu>
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
        logoutUser: () => {(logUserOut(dispatch))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));