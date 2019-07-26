import React, { Component } from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import '../styling/Navbar.css'
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    handleLogIn = (event) => {
        event.preventDefault()
        this.props.history.push('/login')
    }

    handleLogOut = (event) => {
        this.props.onLogout(event)
        this.props.history.push('/login')
    }

    handleFavorites = () => {
        this.props.history.push('/favorites')
    }

    handleHome = () => {
        this.props.history.push('/')
    }


    render(){
        return (
            <div className='navbar'>
                <Menu attached="top">
                    <Dropdown item icon="bars" simple>
                        <Dropdown.Menu>
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
                </Menu>
            </div>
        )
    }
}

export default withRouter(Navbar);