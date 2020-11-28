import {baseApiUrl} from '../../../../config/baseApiUrl';

// get category cho tin tức
// hien tai khong co
export async function getCategoryList() {
    const urlRequest = baseApiUrl + 'category/GetCatRealEstatesType?LanguageId=1&PageSize=9999'
    const response = await fetch(urlRequest, {
        method: 'GET',
    });
    const responseJson = await response.json();
    return responseJson;
}

// get danh sách bất động sản theo loại bất động sản
export async function getList(pageSize, catMemberTypeId) {
    const urlRequest = baseApiUrl +
    'member/GetBroker?LanguageId=1&PageSize=' +
    encodeURIComponent(pageSize) + '&CatMemberTypeId=' + 
    encodeURIComponent(catMemberTypeId);
    // encodeURIComponent(type);
    const response = await fetch(urlRequest, {
        method: 'GET',
    });
    const responseJson = await response.json();
    console.log('news: ', responseJson);
    return responseJson;
}

// get chi tiết thông tin nhà môi giới
export async function getDetail(id) {
    const urlRequest = baseApiUrl + 'member/GetBrokerById?LanguageId=1&Id=' + encodeURIComponent(id)
    const response = await fetch(urlRequest, {
        method: 'GET',
    });
    const responseJson = await response.json();
    console.log('DETAIL: ', responseJson);
    return responseJson;
}


