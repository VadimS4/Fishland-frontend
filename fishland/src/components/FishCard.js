import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import '../styling/FishCard.css'

class FishCard extends Component {

    handleFishClick = (fish) => {
        this.props.handleClick(fish)
        this.props.history.push('/fish')
    }

    render() {
        return (
            <Card onClick={() => this.handleFishClick(this.props.fishy)} >
                <Image className="fishimg" src={require('../images/' + this.props.fishy.name + '.png')} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.fishy.name}</Card.Header>
                </Card.Content>
            </Card>
        )
    }
}

export default withRouter(FishCard);