// @flow
import React, {Component} from "react";
import RealEstateInformation from '../../stories/screens/RealEstateInformation/RealEstateInformation';
import {baseApiUrl} from '../../config/baseApiUrl';
class RealEstateInformationContainer extends Component {
	constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            propertyList: []
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
    getListProperty = async (pageSize, pageIndex, propertyType) => {
        console.log('page size: ', pageSize);
        console.log('page index: ', pageIndex);
        console.log('propertyType: ', propertyType);
        console.log('property type getListProperty: ', propertyType);
        const {propertyList} = this.state;
        const urlRequest = baseApiUrl + 'realstates/GetRealEstates?LanguageId=1&PageSize=' + encodeURIComponent(pageSize) + '&PageIndex=' + encodeURIComponent(pageIndex) + '&RealEstateTypeId=' + encodeURIComponent(propertyType);
        const response = await fetch(urlRequest, {
            method: 'GET',
        });
        const responseJson = await response.json();
        console.log('propertyList: ', responseJson);
        this.setState({propertyList: [...propertyList, ...responseJson]});
    }

    // reload lại component khi chọn sang loại bất động sản khác, ví dụ: Dự án, nhà đất, đất nền,....
    reloadComponent = (propertyType) => {
        this.setState({propertyList: []}, () => this.getListProperty(10, 0, propertyType))
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
        const {categoryList, propertyList} = this.state;
        return(
            <RealEstateInformation
                getListProperty={this.getListProperty}
                categoryList={categoryList}
                propertyList={propertyList}
                reloadComponent={this.reloadComponent}
                parent={this}
            />
        )
    }
}

export default RealEstateInformationContainer;
