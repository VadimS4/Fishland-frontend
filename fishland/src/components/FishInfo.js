import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';
import '../styling/FishInfo.css'

class FishInfo extends Component {

    removeFavorite = (fish) => {
        this.props.removeFromFavorites(fish)
    }

    addFavorite = (fish) => {
        this.props.addToFavorites(fish)
    }

    filterButton = () => {
        
        let favoritesList = null
        let ourFish = null

        if (this.props.user) {
            favoritesList = this.props.user.fish
            ourFish = this.props.selectedFish
        }

        if (!this.props.user) {
            return (
                null
            )
        }
        if (favoritesList.includes(ourFish)) {
            return (
                <button className="ui button" type="button" id="favoriteButton" onClick={() => this.removeFavorite(this.props)}>
                    Remove From Favorite
                </button>
            )
        }
        if (!favoritesList.includes(ourFish)) {
            return (
                <button className="ui button" type="button" id="favoriteButton" onClick={() => this.addFavorite(this.props)}>
                    Add To Favorites
                </button>
            )
        }
    }

    render(){
        const item = this.props.selectedFish
        return(
            <div className="fish">
                {item === null ? null :
                    <React.Fragment>
                        <Segment>
                            <Image src={require('../images/' + item.name + '.png')} size='massive' centered />
                                {this.filterButton()}
                        </Segment>
                        <h3 className="ui header"> {item.name} Information</h3>
                            <p>{item.information}</p>
                        <div className="ui section divider"></div>
                            <h3 className="ui header">{item.name} Facts</h3>
                                <p>{item.facts}</p>
                        <div className="ui section divider"></div>
                        <div className="ui segment">
                            <div className="ui two column very relaxed grid">
                                <div className="column">
                                    <h3 className="ui header">{item.name} Habitat</h3>
                                    <p>{item.habitat}</p>
                                </div>
                                <div className="column">
                                    <h3 className="ui header">{item.name} Diet</h3>
                                    <p>{item.diet}</p>
                                </div>
                            </div>
                            <div className="ui vertical divider">
                                ||
                            </div>
                        </div>
                        <div className="ui section divider"></div>
                            <h3 className="ui header">{item.name} Fishing Tips and Tricks</h3>
                                <p>{item.tips}</p>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default FishInfo;