// @flow
import React, {Component} from "react";
import RealEstateProject from '../../stories/screens/RealEstateProject/RealEstateProject';


class RealEstateProjectContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <RealEstateProject props={this.props} />
        )
    }
}

export default RealEstateProjectContainer;
