// @flow
import React, {Component} from "react";
import Home from "../../stories/screens/Home";
import {baseApiUrl} from '../../config/baseApiUrl';

class HomeContainer extends Home {
	constructor(props) {
        super(props);
        this.state = {
			listMaps: [],
			region: {
				latitude: 21.020393,
                longitude: 105.821055,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
			},
			type:[{ title: 'Chuẩn', id: 'standard', selected: true },
					{ title: 'Vệ tinh', id: 'satellite' },
					{ title: 'Kết hợp', id: 'hybrid' }],
			category: [],
			mapType: "standard",
			selectedCategory: '',
			selectedExchange: '',
			selectedCountry: '',
        }
    }
	componentDidMount() {
		this.getCurrentLocation();
		this.getMakers();
		this.getCategory();
		
    }

    componentWillUnmount() {
       
	}

	async getCategory(){   
		const urlRequest = 'http://mapber.com:51800/api/category/GetCatRealEstatesType?LanguageId=1&PageSize=9999'
        const res = await fetch(urlRequest, {
            method: 'GET',
		});
		const categories = await res.json();
		let cat = categories.map(function(item) {
		  return { title: item.name, id: item.id };
		});
		this.setState({ category: cat });
	}

	animateToCoord(lat, long){
		let camera = {
		  center: {
			latitude: Number(lat),
			longitude: Number(long),
		  }, 
		  zoom: 15
		}
		this.mapView.animateCamera(camera);
	  }
	
	async getCurrentLocation() {
		navigator.geolocation.getCurrentPosition(position => {
		  let region = {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			latitudeDelta: 0.015,
			longitudeDelta: 0.0121,
		  }
	
		  this.setState({ region: region });
		});
	  }

	getMakers = async () => {
        const urlRequest = 'http://mapber.com:51800/api/realstates/GetRealEstates?LanguageId=1&PageSize=50&PageIndex=0&Latitude=&Longitude=&Radius=100&RealEstateTypeId=' +this.state.selectedCategory+ '&RealEstateExchangeId=&CountryId='
        const response = await fetch(urlRequest, {
            method: 'GET',
		});
		const markersArr = [];
		const responseJson = await response.json();
		responseJson.map((element, idx) => {
			const marketObj = {};
			marketObj.id = element.id;
			marketObj.name = element.title;
			marketObj.icon = element.icons;
			marketObj.rating = element.rating;
			marketObj.vicinity = element.vicinity;
			marketObj.marker = {
			  latitude: parseFloat(element.latitude),
			  longitude: parseFloat(element.longitude)
			};
			markersArr.push(marketObj);
		  });
        this.setState({listMaps: markersArr});
	}
	
	//maps type

	switchMapType = (type) => {
		this.setState({ mapType: type });
	  }
}
export default (HomeContainer);
