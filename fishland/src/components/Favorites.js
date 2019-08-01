import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <div className="favorites">
                    <Card.Group itemsPerRow={3}>
                        {this.props.user.fish.map(fishy => (
                            <FishCard key={fishy.id} fishy={fishy} handleClick={this.props.handleClick} /> ))}
                    </Card.Group>
                </div>
            )
        }
    }

    render() {
        console.log("render fires")
        return (
            <div>
                {this.errorHandler()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.appReducer.user
    }
}

export default withRouter(connect(mapStateToProps)(Favorites));