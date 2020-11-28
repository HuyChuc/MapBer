// @flow
import React, {Component} from "react";
import RealEstateProject from '../../stories/screens/RealEstateProject/RealEstateProject';
import {baseApiUrl} from '../../config/baseApiUrl';
class RealEstateProjectContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <RealEstateProject parent={this} />
        )
    }
}

export default RealEstateProjectContainer;
