// @flow
import React, {Component} from "react";
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';
import {getList} from '../api';
import Moment from 'moment';
import { size } from "lodash";

const defaultImg = require('../../../../../assets/contact-icon.png');
class RealEstateConsultantByType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            pageSize: 10,
            catMemberTypeId: 1
        }
    }

    getList = () => {
        const {pageSize, catMemberTypeId} = this.state;
        // const {catMemberTypeId} = this.props;
        // console.log('propertyTypeId: ', propertyTypeId);
        getList(pageSize, catMemberTypeId)
        .then(response => {
            this.setState({listData: response})
        })
    }
    
    renderItem = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.leftContent}>
                    {item.images !== null ?
                    <Image source={{uri: item.images}} style={styles.imgContent} resizeMode='cover' />
                    : <Image source={defaultImg} style={styles.imgContent} resizeMode='cover' />
                    }
                </View>
                <View style={styles.rightContent}>
                    <View style={styles.infoContainer}>
                        <Icon
                        name='person-circle-outline'
                        type='Ionicons'
                        color='#517fa4'
                        size={30} 
                        /><Text style={styles.dest}>{item.fulL_NAME}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Icon
                        name='mail-outline'
                        type='Ionicons'
                        color='#517fa4'
                        size={30} 
                        /><Text style={styles.dest}>{item.email}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Icon
                        name='call'
                        type='Ionicons'
                        color='#517fa4'
                        size={30} 
                        /><Text style={styles.dest}>{item.tel}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Icon
                        name='heart'
                        type='Ionicons'
                        color='#517fa4'
                        size={30} 
                        />
                        <Text style={styles.dest}>{item.evaluatioN_NUMBER}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Icon
                        name='star'
                        type='Ionicons'
                        color='#517fa4'
                        size={30} 
                        /><Text style={styles.dest}>{item.evaluatioN_STAR}</Text>
                    </View>
                </View>
            </View>
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
            <Text style={{  textShadowColor: 'black', textShadowOffset: { width: 1, height: 3 },textShadowRadius: 10, fontSize: 40, fontWeight: '800', flex: 1, alignSelf: "center", paddingTop: 30, fontSize: 40}}>Latest articles</Text>
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
        const {listData} = this.state;
        return(
            <View style={styles.flatlistContainer}>
                <FlatList
                    data={listData}
                    contentContainerStyle={{ paddingBottom: 80, backgroundColor: '#fff' }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                    // ListHeaderComponent = { this.FlatListHeader }   
                    ItemSeparatorComponent = { this.FlatListItemSeparator }
                />
            </View>
        )
    }
}

export default RealEstateConsultantByType;