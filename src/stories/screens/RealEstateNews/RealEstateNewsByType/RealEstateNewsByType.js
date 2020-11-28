// @flow
import React, { Component } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Header, Container, Right, Left, Button, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';
import { getList } from '../api';
import Moment from 'moment';

const defaultImg = require('../../../../../assets/contact-icon.png');
class RealEstateNewsByType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      pageSize: 10
    }
  }

  getList = () => {
    const { pageSize } = this.state;
    // const {propertyTypeId} = this.props;
    // console.log('propertyTypeId: ', propertyTypeId);
    getList(pageSize)
      .then(response => {
        this.setState({ listData: response })
      })
  }

  renderItem = ({ item }) => {
    const {parent} = this.props;
    return (
      <TouchableOpacity
        onPress={() => parent.props.navigation.navigate('RealEstateNewsDetail', { pid: item.id, ptitle: item.title })}
        style={styles.itemContainer}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            {item.images !== null ?
              <Image source={{ uri: item.images }} style={styles.imgContent} resizeMode='cover' />
              : <Image source={defaultImg} style={styles.imgContent} resizeMode='cover' />
            }
            <View style={styles.infoContainer}>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.publish_date}>
                {Moment(item.publisH_DATE).format('MM/DD/YYYY')}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  componentDidMount() {
    this._mounted = true;
    if (this._mounted) {
      this.getList();
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  FlatListHeader = () => {
    return (
      <View elevation={1}
        style={{
          height: 100,
          width: "97%",
          margin: 5,
          backgroundColor: "#fff",
          border: 2.9,
          borderColor: "black",
          alignSelf: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 16,
          },
          shadowOpacity: 1,
          shadowRadius: 7.49
        }}
      >
        <Text style={{ textShadowColor: 'black', textShadowOffset: { width: 1, height: 3 }, textShadowRadius: 10, fontSize: 40, fontWeight: '800', flex: 1, alignSelf: "center", paddingTop: 30, fontSize: 40 }}>Latest articles</Text>
      </View>
    );
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
  render() {
    Moment.locale('en');
    const { listData } = this.state;
    return (
      <View style={styles.flatlistContainer}>
        <FlatList
          data={listData}
          contentContainerStyle={{ paddingBottom: 80, backgroundColor: '#fff' }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          // ListHeaderComponent = { this.FlatListHeader }   
          ItemSeparatorComponent={this.FlatListItemSeparator}
        />
      </View>
    )
  }
}

export default RealEstateNewsByType;