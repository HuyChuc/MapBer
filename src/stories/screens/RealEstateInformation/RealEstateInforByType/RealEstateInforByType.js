// @flow
import React, {Component} from "react";
import {View, Text, FlatList, Image} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';

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
    
    // truyền pagSize, pageIndex, propertyType vào hàm getListProperty được define ở RealEstateInformationContainer
    componentDidMount() {
        const {propertyType, getListProperty, reloadComponent} = this.props
        const {pageSize, pageIndex} = this.state;
        this._mounted = true;
        if (this._mounted) {
            getListProperty(pageSize, pageIndex, propertyType);
            reloadComponent(propertyType);
        }
    }

    // hàm này sẽ chạy khi người dùng kéo list BDS đến hết màn hình
    handleEnd = () => {
        console.log('hanlde end');
        const {pageIndex, pageSize} = this.state;
        const {propertyType, getListProperty} = this.props
        this.setState({pageIndex: pageIndex + 1, pageSize: pageSize + 10});
        getListProperty(pageSize, pageIndex, propertyType);
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    renderItem = ({item, index}) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.leftContent}>
                    {item.images !== null ?
                    <Image source={{uri: item.images}} style={styles.imgContent} resizeMode='cover' />
                    : <Image source={defaultImg} style={styles.imgContent} resizeMode='cover' />
                    }
                </View>
                <View style={styles.rightContent}>
                    <Text>{item.title}</Text>
                </View>
            </View>
        )
    }

    render() {
        const {propertyList} = this.props
        return(
            <View style={styles.flatlistContainer}>
                <FlatList
                 data={propertyList}
                 keyExtractor={item => item.id}
                 renderItem={this.renderItem}
                 onEndReached={this.handleEnd}
                 onEndReachedThreshold={0.01}
                />
            </View>
        )
    }
}

export default RealEstateInforByType;
