// @flow
import React, {Component} from "react";
import RealEstateNews from '../../stories/screens/RealEstateNews/RealEstateNews';


class RealEstateNewsContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <RealEstateNews props={this.props} />
        )
    }
}

export default RealEstateNewsContainer;
