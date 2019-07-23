import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class FishCard extends Component {

    render() {
        return (
            <Card>
                <Image src={require('../images/Bluegill.png')} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Fish1</Card.Header>
                    <Card.Description>
                        Fishermen Love this Application
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default FishCard;