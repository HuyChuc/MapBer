'use strict';
import React, { Component, useState } from 'react';
import * as actions from '../../states/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Core from '../../utils/core'
import BaseServices from '../../utils/baseServices';
import Layout from './layout';
import Geocoder from 'react-native-geocoder';
import MapView, {
  Marker,
  AnimatedRegion,
  Animated,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import haversine from "haversine";

var loadMore = false
const GOOGLE_API_KEY = 'AIzaSyDhLlTdQSd0nV-F0_G7tZa82IhdF1orrPM'


class TabMaps extends Layout {
  _isMounted=false;
  
  constructor(props) {
    super(props);
    this.state = {
      showModalCollection: false,
      showModalPress: false,

      isSearch: false,

      loaded: false,
      refreshing: false,
      data: {},
      page: 1,
      isLoadEnd: false,

      dataCollection: {},
      collectionSelected: {},
      dataBDS: {},

      txtSearch: '',
      position: {
        coords: {
          latitude: 0,
          longitude: 0
        }
      },
      region: {
        latitude: 21.027639676958348,
        longitude: 0.03236646073597882,
        latitudeDelta: 105.85271157324314,
        longitudeDelta: 0.017766952514648438
      },
      places: [],
      isLoading: false,
      mapType: "standard",
      currentOperation: 'none',
      filter: {
        title: '',
        data: []
      },
      country: [],
      selectedCountry: '',
      type:[{ title: 'Chuẩn', id: 'standard', selected: true },
      { title: 'Vệ tinh', id: 'satellite' },
        { title: 'Kết hợp', id: 'hybrid' }],
      category: [],
      selectedCategory: '',
      selectedExchange: '',
      currentPressCoordinate: {},
      //Modal press
      txtPhone: '',
      txtLastName: '',
      txtFirstName: '',
      txtInfo: '',
      keyBoardheight: 0,
    }
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.getCurrentLocation();
      // simply add your google key
      Geocoder.fallbackToGoogle(GOOGLE_API_KEY);
      this.getCountry();
      this.getCategory();
    }
    //Test login
    // var first = { ... this.props.app.first };
    // first['onBoarding'] = true; // true
    // this.props.actions.app.setFirst(first);

  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  async getCountry(){
    let res = await BaseServices.getCatCountry();
    let country = res.map(function(item, idx) {
      return { title: item.displaY_TEXT, id: item.id, selected: idx == 0 };
    });
    this.setState({ country: country });
  }

  async getCategory(){   
    let res = await BaseServices.getCatRealEstatesType();
    let cat = res.map(function(item) {
      return { title: item.name, id: item.id };
    });
    
    this.setState({ category: cat });
  }
  async getCatCity(){
    let res = await BaseServices.getCatCity();
    let cat = res.map(function(item) {
      return { title: item.name, id: item.id };
    });
    this.setState({ catcity: catcity });
  }

  onRegionChange(region) {
    this.setState({ region: region });
    console.log('region => ', region);
    this.getPlaces();
  }
  
  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }

      this.setState({ region: region });
      this.animateToCoord(region.latitude, region.longitude);
      this.getPlaces();
    });
  }

  async getPlaces() {
    const { region } = this.state;
    const markers = [];
    let places = await BaseServices.getListBDSMap(0, 9999, region.latitude, region.longitude, 500, this.state.selectedCategory, this.state.selectedExchange, this.state.selectedCountry, '');
    
    places.map((element, idx) => {
      const marketObj = {};
      marketObj.id = element.id;
      marketObj.name = element.title;
      marketObj.icon = element.icons.replace('..', 'http://mapber.com');
      marketObj.rating = element.rating;
      marketObj.vicinity = element.vicinity;
      marketObj.marker = {
        latitude: parseFloat(element.latitude),
        longitude: parseFloat(element.longitude)
      };
      markers.push(marketObj);
    });
    
    await this.setState({ places: markers });
  }

  _onPressItemFilter = (item) => {
    let data = [...this.state.filter.data]
    let selectedCollection = {};
    this.state.filter.data.map((val, idnex) => {
      if (val.id == item.id) {
        data[idnex].selected = val.selected = true;
        selectedCollection = { ...val };
      } else {
        data[idnex].selected = val.selected = false
      }
    })
    this.setState({ filter: {title: this.state.filter.title, data: [...data]}, collectionSelected: {...selectedCollection} })
  }
  _onCloseFilter = () => {
    console.log('selected: ', this.state.collectionSelected);
    if(this.state.currentOperation == 'type'){
      this.switchMapType(this.state.collectionSelected.id);
    }
    if(this.state.currentOperation == 'country'){
      this.setState({ selectedCountry: this.state.collectionSelected.id })
      
      this.getPlaces();
    }
    if(this.state.currentOperation == 'category'){
      this.setState({ selectedCategory: this.state.collectionSelected.id })

      this.getPlaces();
    }
    this.setState({ showModalFilter: false });
  }
  switchMapType = (type) => {
    this.setState({ mapType: type });
  }
  _onChangeSearch = (val) => this.setState({ txtSearch: val })

  onMapPress = async (e) => {
    this.animateToCoord(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
     
    // use the lib as usual
    let ret = await Geocoder.geocodePosition({lat: e.nativeEvent.coordinate.latitude, lng: e.nativeEvent.coordinate.longitude})

    this.setState({ showModalPress: true, currentPressCoordinate: { ...e.nativeEvent.coordinate }, txtLastName: ret.formattedAddress 
    });
  }
  _onCloseModalPress = () => {
    Core.Toast.success('Thành công');

    this.setState({ showModalPress: false });
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
}

const stateToProps = (state) => ({
  ...state
});
const dispatchToProps = (dispatch) => {
  let acts = {};
  for (let key in actions) {
    acts[key] = bindActionCreators(actions[key], dispatch);
  }
  return {
    actions: acts
  };
};
export default connect(stateToProps, dispatchToProps)(TabMaps);