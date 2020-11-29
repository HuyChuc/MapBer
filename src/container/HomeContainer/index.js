// @flow
import React, {Component} from "react";
import Home from "../../stories/screens/Home";
import {baseApiUrl} from '../../config/baseApiUrl';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
// import {request, PERMISSIONS} from 'react-native-permissions';
import { Platform } from "react-native";

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
			amount: 99,
        }
    }
	componentDidMount() {
		this._mounted = true
		if (this._mounted) {
			this.getMakers();
			this.getCategory();
		}
		// this.requestLocationPermission();
    }

    componentWillUnmount() {
		this._mounted = false;
	}

	onRegionChange = (region) =>{
		this.setState({ region : region});
	}
	getBySelectCate = (id) =>{
		
		this.setState({selectedCategory : id})
		this.getMakers();
	}
	// get makers
	getMakers = async () => {
        const urlRequest = baseApiUrl + 'realstates/GetRealEstates?LanguageId=1&PageSize=50&PageIndex=0&Latitude='+this.state.region.latitude+'&Longitude='+this.state.region.longitude+'&Radius=100&RealEstateTypeId=' +this.state.selectedCategory+ '&RealEstateExchangeId=&CountryId='
        const response = await fetch(urlRequest, {
            method: 'GET',
		});
		const markersArr = [];
		const responseJson = await response.json();
		responseJson.map((element, idx) => {
			const marketObj = {};
			marketObj.id = element.id;
			marketObj.title = element.title;
			marketObj.icon = element.icons;
			marketObj.rating = element.rating;
			marketObj.vicinity = element.vicinity;
			marketObj.owner = element.fulL_NAME;
			marketObj.image = element.images;
			marketObj.starRate = element.iS_STAR;
			marketObj.reviews = element.policY_CONTENT;
			marketObj.marker = {
			  latitude: parseFloat(element.latitude),
			  longitude: parseFloat(element.longitude)
			};
			markersArr.push(marketObj);
		  });
		  this.setState({listMaps: markersArr});
	}
	// get categoty
	async getCategory(){   
		const urlRequest = baseApiUrl + 'category/GetCatRealEstatesType?LanguageId=1&PageSize=9999'
        const res = await fetch(urlRequest, {
            method: 'GET',
		});
		const categories = await res.json();
		let cat = categories.map(function(item) {
		  return { title: item.name, id: item.id };
		});
		cat.unshift({title : 'Tất cả', id : ''})
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
	// requestLocationPermission = async() =>{
	// 	if(Platform.OS === 'ios'){
	// 		var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
	// 		if(response === 'granted'){
	// 			this.getCurrentLocation();
	// 		}
	// 	}else{
	// 		var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
	// 		if(response === 'granted'){
	// 			this.getCurrentLocation();
	// 		}
	// 	}
	// }


	getCurrentLocation = () => {
		Geolocation.getCurrentPosition(
			position =>{
				console.log(JSON.stringify(position))
				let region = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				  }
				  this.setState({ region: region });
			}
			)
	}
	//maps type

	switchMapType = (type) => {
		this.setState({ mapType: type });
	  }
}

export default (HomeContainer);
