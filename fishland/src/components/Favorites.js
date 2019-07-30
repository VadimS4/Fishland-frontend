import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import FishCard from './FishCard';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import '../styling/Favorites.css'

class Favorites extends Component {

    handleClick = () => {
        this.props.history.push('/login')
    }

    errorHandler = () => {
        if (!this.props.user) {
            return (
                <div className="noUser">
                    <Segment placeholder className="segment">
                        <Header icon>
                            <Icon name='folder' />
                            Please Log In To Add Favorites
                        </Header>
                        <Segment.Inline>
                            <Button onClick={this.handleClick} primary>Log In</Button>
                        </Segment.Inline>
                    </Segment>
                </div >
            )
        } else if (this.props.user && this.props.user.fish === []) {
            return (
                <div className="noFavorites">
                    <h1>Hello, {this.props.user.name}, You Have No Bookmarks</h1>
                </div>
            )
        } else {
            return (
                this.props.user.fish.map(fishy => (
                    <FishCard key={fishy.id} fishy={fishy} handleClick={this.props.handleClick} />
            )))
        }
    }

    render() {
        return (
            <div className='favorites'>
                <Card.Group itemsPerRow={3}>
                    {this.errorHandler()}
                </Card.Group>
            </div> 
        )
    }
}

export default withRouter(Favorites)