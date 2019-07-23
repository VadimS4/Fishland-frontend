import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import FishCard from '../components/FishCard'
import Navbar from '../components/Navbar'
import '../styling/Fish.css'

class Fish extends Component {
    render(){
        return (
            <Navbar />,
            <Card.Group itemsPerRow={3}>
                <FishCard />
                <FishCard />
                <FishCard />
                <FishCard />
                <FishCard />
                <FishCard />
                <FishCard />
                <FishCard />
                <FishCard />
                <FishCard />
                <FishCard />
                <FishCard />
            </Card.Group>
        )
    }
}

export default Fish;