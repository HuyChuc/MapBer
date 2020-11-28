// @flow
import React, {Component} from "react";
import {View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';
import {getListProperty} from '../api';

const defaultImg = require('../../../../../assets/contact-icon.png');
class RealEstateInforByType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyList: [],
            pageSize: 10,
            pageIndex: 0
        }
    }

    getListProps = () => {
        const {pageIndex, pageSize} = this.state;
        this.setState({propertyList: []});
        const {propertyTypeId} = this.props;
        console.log('propertyTypeId: ', propertyTypeId);
        getListProperty(pageSize, pageIndex, propertyTypeId)
        .then(propertyList => {
            this.setState({propertyList})
        })
    }
    
    renderItem = ({item, index}) => {
        const {parent} = this.props;
        return (
            <TouchableOpacity
                onPress={() => parent.props.navigation.navigate('RealEstateDetail', {propertyId: item.id, propertyTitle: item.title})}
                style={styles.itemContainer}>
                <View style={styles.leftContent}>
                    {item.images !== null ?
                    <Image source={{uri: item.images}} style={styles.imgContent} resizeMode='cover' />
                    : <Image source={defaultImg} style={styles.imgContent} resizeMode='cover' />
                    }
                </View>
                <View style={styles.rightContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.approveDate}>
                            {Moment(item.approvE_DATE).format('MM/DD/YYYY')}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.labelText}>Giá: </Text>
                        <Text>{item.price !== null ? item.price + ' ' + 
                                                     item.caT_UNIT_DETAIL_NAME: 'Liên hệ'}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.labelText}>Diện tích: </Text>
                        <Text style={styles.valueText}>{item.width * item.length} (m2)</Text>
                    </View>
                    <View>
                        <Text style={styles.labelText}>Địa chỉ: </Text>
                        <Text style={styles.valueText}>{item.address}</Text>
                    </View>
                    <View>
                        <Text style={styles.labelText}>Quận huyện: </Text>
                        <Text style={styles.valueText}>{item.caT_DISTRICT_NAME + ', ' +
                            item.caT_CITY_NAME + ', ' +
                            item.caT_COUNTRY_NAME}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        this.getListProps();
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
        const {propertyList} = this.state;
        return(
            <View style={styles.flatlistContainer}>
                <FlatList
                    data={propertyList}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                />
            </View>
        )
    }
}

export default RealEstateInforByType;
