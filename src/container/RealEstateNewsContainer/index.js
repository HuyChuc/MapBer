// @flow
import React, {Component} from "react";
import RealEstateNews from '../../stories/screens/RealEstateNews/RealEstateNews';
import {baseApiUrl} from '../../config/baseApiUrl';
class RealEstateNewsContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
        }
    }

    // get all category for Real estate information
    getCategory = async () => {
        const urlRequest = baseApiUrl + 'news/GetNews?LanguageId=1&PageSize=9999';
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
            <RealEstateNews categoryList={categoryList} props={this.props} />
        )
    }
}

export default RealEstateNewsContainer;
