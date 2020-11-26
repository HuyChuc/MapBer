// @flow
import React, {Component} from "react";
import RealEstateInformation from '../../stories/screens/RealEstateInformation/RealEstateInformation';


class RealEstateInformationContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <RealEstateInformation props={this.props} />
        )
    }
}

export default RealEstateInformationContainer;
