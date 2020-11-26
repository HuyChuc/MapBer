// @flow
import React, {Component} from "react";
import RealEstateInformation from '../../stories/screens/RealEstateInformation/RealEstateInformation';
import {baseApiUrl} from '../../config/baseApiUrl';
class RealEstateInformationContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            propertyList: [],
            loading: true,
            propertyType: '',
            pageSize: 10,
            pageIndex: 0,
        }
    }

    // get all category for Real estate information
    getCategory = async () => {
        const urlRequest = baseApiUrl + 'category/GetCatRealEstatesType?LanguageId=1&PageSize=9999'
        const response = await fetch(urlRequest, {
            method: 'GET',
        });
        const responseJson = await response.json();
        console.log('cat: ', responseJson);
        this.setState({categoryList: responseJson});
    }

    // get danh sách BDS theo loại BDS (type)
    // truyền function này sang RealEstateInformation -> RealEstateInforByType
    // để thực hiện lấy list property theo type
    getListProperty = async () => {
        console.log('propertyType: ', this.state.propertyType);
        const {pageIndex, pageSize, propertyType} = this.state;
        const urlRequest = baseApiUrl + 'realstates/GetRealEstates?LanguageId=1&PageSize=' + encodeURIComponent(pageSize) + '&PageIndex=' + encodeURIComponent(pageIndex) + '&RealEstateTypeId=' + encodeURIComponent(propertyType);
        const response = await fetch(urlRequest, {
            method: 'GET',
        });
        const responseJson = await response.json();
        console.log('propertyList: ', responseJson);
        this.setState({propertyList: responseJson, loading: false});
    }

    handleChildState = (propertyType) => {
        this.setState({propertyType: propertyType}, this.getListProperty);
    }

    // reload lại component khi chọn sang loại bất động sản khác, ví dụ: Dự án, nhà đất, đất nền,....
    reloadComponent = (propertyType) => {
        this.setState({propertyList: []});
        this.getListProperty(10, 0, propertyType);
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
        const {categoryList, propertyList, loading} = this.state;
        return(
            <RealEstateInformation
                getListProperty={this.getListProperty}
                categoryList={categoryList}
                propertyList={propertyList}
                reloadComponent={this.reloadComponent}
                handleChildState={this.handleChildState}
                loading={loading}
                parent={this}
            />
        )
    }
}

export default RealEstateInformationContainer;
