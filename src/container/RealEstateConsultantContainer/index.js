// @flow
import React, {Component} from "react";
import {baseApiUrl} from '../../config/baseApiUrl';
import RealEstateConsultant from '../../stories/screens/RealEstateConsultant/RealEstateConsultant';
class RealEstateConsultantContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <RealEstateConsultant parent={this} />
        )
    }
}

export default RealEstateConsultantContainer;
