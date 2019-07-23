import React, { Component } from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import '../styling/Navbar.css'

class Navbar extends Component {

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
                                    <Dropdown.Item>Favorites</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>Edit Account</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Export</Dropdown.Header>
                            <Dropdown.Item>Share</Dropdown.Item>
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

export default Navbar;