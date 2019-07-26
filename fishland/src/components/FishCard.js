import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react';

class FishCard extends Component {

    handleFishClick = (fish) => {
        this.props.handleClick(fish)
        this.props.history.push('/fish')
    }

    render() {
        return (
            <Card onClick={() => this.handleFishClick(this.props.fishy)}>
                <Image src={require('../images/' + this.props.fishy.name + '.png')} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.fishy.name}</Card.Header>
                    <Card.Description >
                        {this.props.fishy.information.slice(0, 140) + '...'}
                        <br></br>
                        <div className='ui button'>
                            <Button basic color='green'>
                                Add to Favorites
                        </Button>
                        </div>
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default withRouter(FishCard);