// @flow
import React, {Component} from "react";
import RealEstateNews from '../../stories/screens/RealEstateNews/RealEstateNews';
import {baseApiUrl} from '../../config/baseApiUrl';
class RealEstateNewsContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <RealEstateNews parent={this} />
        )
    }
}

export default RealEstateNewsContainer;
