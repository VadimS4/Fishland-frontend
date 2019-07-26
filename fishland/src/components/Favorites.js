import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import FishCard from './FishCard';

class Favorites extends Component {

    render() {
        return (
            <div className='favorites'>
                <Card.Group itemsPerRow={3}>
                    {this.props.user.fish === [] ? 
                        <h1>Hello {this.props.user.username}, You Have No Bookmarks!</h1>
                        :
                        this.props.user.fish.map(fishy => (
                            <FishCard key={fishy.id} fishy={fishy} handleClick={this.props.handleClick}/>
                    ))}
                </Card.Group>
            </div> 
        )
    }
}

export default Favorites