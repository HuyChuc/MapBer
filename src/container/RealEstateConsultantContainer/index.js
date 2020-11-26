// @flow
import React, {Component} from "react";
import {baseApiUrl} from '../../config/baseApiUrl';
import RealEstateConsultant from '../../stories/screens/RealEstateConsultant/RealEstateConsultant';
class RealEstateConsultantContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
        }
    }

    // get all category for Real estate information
    getCategory = async () => {
        const urlRequest = baseApiUrl + 'member/GetBroker?LanguageId=1&CatMemberTypeId=1&PageSize=9999';
        const response = await fetch(urlRequest, {
            method: 'GET',
        });
        const responseJson = await response.json();
        console.log('real estate consultant: ', responseJson);
        this.setState({categoryList: responseJson});
    }

    componentDidMount() {
        this._mounted = true;
        if (this._mounted) {
            this.getCategory();
        }
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        const {categoryList} = this.state;
        return(
            <RealEstateConsultant categoryList={categoryList} props={this.props} />
        )
    }
}

export default RealEstateConsultantContainer;
