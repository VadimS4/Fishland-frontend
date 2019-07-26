import React, { Component } from 'react';

class FishInfo extends Component {

    render(){
        const item = this.props.selectedFish
        return(
            <div className="fish">
                <br></br><br></br>
                <h1>{item.name}</h1>
            </div>
        )
    }

}

export default FishInfo;