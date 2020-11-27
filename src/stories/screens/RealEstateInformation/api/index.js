import {baseApiUrl} from '../../../../config/baseApiUrl';

// get category cho Thông tin bất động sản
export async function getCategoryList() {
    const urlRequest = baseApiUrl + 'category/GetCatRealEstatesType?LanguageId=1&PageSize=9999'
    const response = await fetch(urlRequest, {
        method: 'GET',
    });
    const responseJson = await response.json();
    return responseJson;
}

// get danh sách bất động sản theo loại bất động sản
export async function getListProperty(pageSize, pageIndex, propertyType) {
    const urlRequest = baseApiUrl +
    'realstates/GetRealEstates?LanguageId=1&PageSize=' +
    encodeURIComponent(pageSize) + '&PageIndex=' +
    encodeURIComponent(pageIndex) + '&RealEstateTypeId=' +
    encodeURIComponent(propertyType);
    const response = await fetch(urlRequest, {
        method: 'GET',
    });
    const responseJson = await response.json();
    console.log('propertyList: ', responseJson);
    return responseJson;
}

