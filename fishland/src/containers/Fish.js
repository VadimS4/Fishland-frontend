import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import FishCard from '../components/FishCard'
import '../styling/Fish.css'

class Fish extends Component {
    render(){
        return (
            <div>
                <Card.Group itemsPerRow={3}>
                    {this.props.fishes.map(fishy => (
                        <FishCard key={fishy.id} fishy={fishy} handleClick={this.props.handleClick}/>
                    ))}
                </Card.Group>
            </div>
        )
    }
}

export default Fish;