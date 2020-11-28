import {baseApiUrl} from '../../../../config/baseApiUrl';

// get danh sách bất động sản theo loại bất động sản
export async function getListProperty(pageSize, pageIndex) {
    const urlRequest = baseApiUrl +
    'realstates/GetRealEstates?LanguageId=1&PageSize=' +
    encodeURIComponent(pageSize) + '&PageIndex=' +
    encodeURIComponent(pageIndex)
    const response = await fetch(urlRequest, {
        method: 'GET',
    });
    const responseJson = await response.json();
    console.log('propertyList: ', responseJson);
    return responseJson;
}
