// @flow
import React, {Component} from "react";
import RealEstateProject from '../../stories/screens/RealEstateProject/RealEstateProject';
import {baseApiUrl} from '../../config/baseApiUrl';
class RealEstateProjectContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
        }
    }

    // get all category for Real estate information
    getCategory = async () => {
        const urlRequest = baseApiUrl + 'category/GetCatRealEstatesType?LanguageId=1&PageSize=9999'
        const response = await fetch(urlRequest, {
            method: 'GET',
        });
        const responseJson = await response.json();
        console.log('real estate info: ', responseJson);
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
            <RealEstateProject categoryList={categoryList} props={this.props} />
        )
    }
}

export default RealEstateProjectContainer;
