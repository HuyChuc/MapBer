'use strict';

import React, { Component } from 'react';
import { StyleSheet, FlatList, View, ScrollView, Text, Modal, TextInput, TouchableOpacity, RefreshControl, ActivityIndicator, Dimensions, Image } from 'react-native';
import { TouchableOpacity as ButtonTouchable } from 'react-native-gesture-handler';
import Configs from '../../configs';
import style from './style';
import styles from '../../style';
import Header from './Header';
import { FooterBTN, Button, Money, TextCustom, NoItem } from '../../view_components/control.js';
import { TextField } from 'react-native-material-textfield';
import * as Location from 'expo-location';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import * as Icon from '@expo/vector-icons';
import i18n from 'i18n-js';

import { MapItem } from '../../view_components/Item';

import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import haversine from "haversine";
const IMG1 = require('../../resources/layers.png');
const IMG2 = require('../../resources/login3.png');
const IMG3 = require('../../resources/login3.png');
var self
var timeoutSearch

export default class Layout extends Component {


  render() {
    self = this
    const cart = { ...this.props.app.cart }
    const { loaded, data } = this.state
    const { lat, long, places, mapType } = this.state;
    const { txtFirstName, txtLastName, txtPhone } = this.state

    return (
      <View style={style.container}>
        <Header
          title={this.state.collectionSelected && this.state.collectionSelected.name || i18n.t('collections')}
          onCollectionsPressed={() => this.setState({ showModalCollection: true })}
          onChangeSearch={(val) => {
            this.setState({ txtSearch: val });
          }}
          onSubmitSearch={(val) => {
            this.props.navigation.navigate('DanhSachBDS', { from: 'home', text: this.state.txtSearch });
          }}
          navigation={this.props.navigation} />

        <MapView
          ref={ref => this.mapView = ref}
          style={{
            flex: 1
          }}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          showsUserLocation={true}
          mapType={this.state.mapType}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.onRegionChange.bind(this)}
          onLongPress={(e) => { this.onMapPress(e) }}
        >
          <TextCustom>{this.state.places.length}</TextCustom>
          {places.map((marker, i) => (
            <MapItem data={{ marker: marker, i: i }} navigation={this.props.navigation}></MapItem>
          ))}

          {this.state.currentPressCoordinate &&
            <MapView.Marker
              key={data.i}
              coordinate={{
                latitude: this.state.currentPressCoordinate.latitude || 0,
                longitude: this.state.currentPressCoordinate.longitude || 0
              }}
              title={'Vị trí được chọn'}
            >
            </MapView.Marker>
          }

          <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
          }} >
            <TouchableOpacity style={{ backgroundColor: '#fff', opacity: 1, borderRadius: 10, width: 35, height: 35, justifyContent: 'center', alignItems: 'center', margin: 10 }}
              onPress={() => {
                this.setState({ filter: { title: 'Kiểu bản đồ', data: this.state.type }, showModalFilter: true, currentOperation: 'type' });
              }} >
              <Icon.MaterialCommunityIcons name={'buffer'} color={Configs.Color} size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#fff', opacity: 1, borderRadius: 10, width: 35, height: 35, justifyContent: 'center', alignItems: 'center', margin: 10 }}
              onPress={() => {
                this.setState({ filter: { title: 'Quốc gia', data: this.state.country }, showModalFilter: true, currentOperation: 'country' });
              }}
            >
              <Icon.MaterialCommunityIcons name={'filter-variant'} color={Configs.Color} size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: '#fff', opacity: 1, borderRadius: 10, width: 35, height: 35, justifyContent: 'center', alignItems: 'center', margin: 10 }}
              onPress={() => {
                this.setState({ filter: { title: 'Loại bất động sản', data: this.state.category }, showModalFilter: true, currentOperation: 'category' });
              }}>
              <Icon.MaterialCommunityIcons name={'city-variant'} color={Configs.Color} size={25} />
            </TouchableOpacity>
          </View>
        </MapView>

        {this.state.showModalFilter && this.renderModalFilter()}

        {this.state.showModalPress && this.renderModalPress()}

        <KeyboardSpacer onToggle={(show, height) => {
          this.setState({ keyboardShow: show, keyBoardheight: height })
        }} />
      </View>
    );

  }
  renderBody() {
    var { data, refreshing, isLoadEnd, txtSearch } = this.state

    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    )
  }
  renderButtonInMap = () => (
    <TouchableOpacity style={{ backgroundColor: '#fff', opacity: 1, borderRadius: 10, width: 35, height: 35, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
      <Icon.MaterialCommunityIcons name={'buffer'} color={Configs.Color} size={25} />
    </TouchableOpacity>
  );
  renderModalFilter = () => (
    <View style={{ ...StyleSheet.absoluteFill, justifyContent: 'center' }}>
      <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#00000040' }} />
      <View style={{...style.containerFilter }}>
        <View style={style.containerHeaderFilter}>
          <TextCustom style={{ fontSize: 16 }}>{this.state.filter.title}</TextCustom>
          <View style={{ flexDirection: 'row-reverse', flex: 1 }}>
            <ButtonTouchable onPress={() => { this.setState({ showModalFilter: false }) }} >
              <Icon.MaterialCommunityIcons name="close" size={25} />
            </ButtonTouchable>
          </View>
        </View>

        <View style={style.containerFilterBody}>

          <FlatList
            data={this.state.filter.data}
            keyExtractor={(val, index) => `index${index}`}
            ItemSeparatorComponent={() => <View style={{ backgroundColor: Configs.ColorSparetor, marginLeft: 15, height: Configs.SperatorLine }} />}
            renderItem={({ item, index }) => { return this.renderItemFilter(item) }}
          />
        </View>

        <View style={style.containerFilterBottom}>
          <TouchableOpacity style={{
            flex: 1,
            justifyContent: 'center', alignItems: 'center',
          }}
            onPress={this._onCloseFilter} >
            <TextCustom style={{ fontSize: 16 }}>{i18n.t('confirm')}</TextCustom>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );

  renderModalPress() {

    const { txtFirstName, txtLastName, txtPhone, txtInfo, data } = this.state

    return (
      <View style={{ ...StyleSheet.absoluteFill, justifyContent: 'flex-end', paddingBottom: this.state.keyBoardheight > 0 ? this.state.keyBoardheight + 20 : '5%' }}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#00000040' }} />
        <View style={style.containerPress}>
          <View style={style.containerHeaderPress}>
            <TextCustom style={{ fontSize: 16 }}>{i18n.t('createPlace')}</TextCustom>
            <View style={{ flexDirection: 'row-reverse', flex: 1 }}>
              <ButtonTouchable onPress={() => { this.setState({ showModalPress: false }) }} >
                <Icon.MaterialCommunityIcons name="close" size={25} />
              </ButtonTouchable>
            </View>
          </View>

          <View style={style.containerPressBody}>
            <ScrollView style={{ flex: 1, padding: 15 }}>
              <TextField
                label={i18n.t('bdsName') + ' *'}
                style={{ fontFamily: Configs.FONT_DEFAULT }}
                labelTextStyle={{ fontFamily: Configs.FONT_DEFAULT }}
                titleTextStyle={{ fontFamily: Configs.FONT_DEFAULT }}
                value={txtFirstName}
                errorColor={Configs.ColorError}
                enablesReturnKeyAutomatically={true}
                tintColor={Configs.Color}
                onChangeText={(val) => {

                  this.setState({ txtFirstName: val })
                }}
                onSubmitEditing={() => {
                  this.txtLastName.focus()
                }}
              />

              <TextField
                ref={(refs) => this.txtLastName = refs}
                label={i18n.t('bdsAddress') + ' *'}
                style={{ fontFamily: Configs.FONT_DEFAULT }}
                labelTextStyle={{ fontFamily: Configs.FONT_DEFAULT }}
                titleTextStyle={{ fontFamily: Configs.FONT_DEFAULT }}
                value={txtLastName}
                onChangeText={(val) => {

                  this.setState({ txtLastName: val })
                }}
                tintColor={Configs.Color}
                errorColor={Configs.ColorError}
                onSubmitEditing={() => {
                  this.txtInfo.focus()
                }}
              />

              <TextField
                ref={(refs) => this.txtInfo = refs}
                label={i18n.t('bdsInfo') + ' *'}
                style={{ fontFamily: Configs.FONT_DEFAULT }}
                labelTextStyle={{ fontFamily: Configs.FONT_DEFAULT }}
                titleTextStyle={{ fontFamily: Configs.FONT_DEFAULT }}
                value={txtInfo}
                onChangeText={(val) => {

                  this.setState({ txtInfo: val })
                }}
                tintColor={Configs.Color}
                errorColor={Configs.ColorError}
                onSubmitEditing={() => {
                  this.txtPhone.focus()
                }}
              />


              <TextField
                ref={(refs) => this.txtPhone = refs}
                label={i18n.t('bdsPrice') + ' *'}
                style={{ fontFamily: Configs.FONT_DEFAULT }}
                labelTextStyle={{ fontFamily: Configs.FONT_DEFAULT }}
                titleTextStyle={{ fontFamily: Configs.FONT_DEFAULT }}
                value={txtPhone}
                errorColor={Configs.ColorError}
                tintColor={Configs.Color}
                keyboardType={'phone-pad'}
                onChangeText={(val) => {

                  this.setState({ txtPhone: val })
                }}
                onSubmitEditing={() => {
                }}
              />
            </ScrollView>
          </View>

          <View style={style.containerFilterBottom}>

            <ButtonTouchable
              onPress={this._onCloseModalPress} >
              <TextCustom style={{ fontSize: 16 }}>{i18n.t('createPlace')}</TextCustom>
            </ButtonTouchable>
          </View>

        </View>
      </View>
    )
  }
  renderItemFilter = (item, index) => (
    <Button
      style={{ height: 50, width: '100%', alignItems: 'center', flexDirection: 'row' }}
      onPress={() => this._onPressItemFilter(item)}
    >

      <TextCustom style={{ flex: 1, marginHorizontal: 15, fontSize: 14 }}>{item.title}</TextCustom>

      {item.selected && <View style={styles.containerIcon}>
        <Icon.MaterialCommunityIcons name={'check-circle-outline'} color={Configs.Color} size={25} />
      </View>}
    </Button>
  )

}