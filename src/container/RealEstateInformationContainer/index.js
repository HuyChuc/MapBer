// @flow
import React, {Component} from "react";
import RealEstateInformation from '../../stories/screens/RealEstateInformation/RealEstateInformation';
import {baseApiUrl} from '../../config/baseApiUrl';
class RealEstateInformationContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <RealEstateInformation parent={this}/>
        )
    }
}

export default RealEstateInformationContainer;
