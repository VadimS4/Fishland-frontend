import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import '../styling/FishInfo.css'

class FishInfo extends Component {

    removeFavorite = (fish) => {
        this.props.removeFromFavorites(fish)
        this.props.history.push("/favorites")
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

        console.log(favoritesList)
        console.log(ourFish)

        if (!this.props.user) {
            return (
                null
            )
        }
        if (favoritesList.some(favorite => favorite.id === ourFish.id)) {
            return (
                <button className="ui button" type="button" id="favoriteButton" onClick={() => this.removeFavorite(this.props)}>
                    Remove From Favorite
                </button>
            )
        } else {
            return (
                <button className="ui button" type="button" id="favoriteButton" onClick={() => this.addFavorite(this.props)}>
                    Add To Favorites
                </button>
            )
        }
    }

    filterFacts = () => {
        let facts = this.props.selectedFish.facts.split(".")
        console.log(facts)
        if (!facts) {
            return null
        } else {
            facts.forEach(fact => {
                return (
                    <li>
                        {fact + "."}
                    </li>
                )
            })
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
                        <div className="ui segment">
                            <div className="ui two column very relaxed grid">
                                <div className="column" id="fishInfo1">
                                    <Segment id="fishInformation" raised>
                                        <h3 className="ui header"> {item.name} Information</h3>
                                        <p>{item.information}</p>
                                    </Segment>
                                    <Segment id="fishFacts" raised>
                                        <h3 className="ui header">{item.name} Facts</h3>
                                        <ul>
                                            {item.facts.split(".").map(oneItem => {
                                                return (<li>{oneItem}</li>);
                                            })}
                                        </ul>
                                    </Segment>
                                </div>
                                <div className="column" id="fishInfo2">
                                    <Segment id="fishHabitat" className="column">
                                        <h3 className="ui header">{item.name} Habitat</h3>
                                        <p>{item.habitat}</p>
                                    </Segment>
                                    <Segment id="fishDiet" className="column">
                                        <h3 className="ui header">{item.name} Diet</h3>
                                        <p>{item.diet}</p>
                                    </Segment>
                                    <Segment id="fishTips" raised>
                                        <h3 className="ui header">{item.name} Fishing Tips and Tricks</h3>
                                        <ul>
                                            {item.tips.split(".").map(thisItem => {
                                                return (<li>{thisItem}</li>)
                                            })}
                                        </ul>
                                    </Segment>
                                </div>
                            </div>
                            <div className="ui vertical divider">||</div>
                        </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default withRouter(FishInfo);