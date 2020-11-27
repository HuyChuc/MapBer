// @flow
import React, {Component} from "react";
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
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
        const {propertyTypeId} = this.props;
        console.log('propertyTypeId: ', propertyTypeId);
        getListProperty(pageSize, pageIndex, propertyTypeId)
        .then(propertyList => {
            console.log('propertyList: ', propertyList)
            this.setState({propertyList})
        })
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
                    <View style={styles.infoContainer}>
                        <Text style={styles.labelText}>Giá: </Text>
                        <Text style={styles.valueText}>Liên hệ</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.labelText}>Diện tích: </Text>
                        <Text style={styles.valueText}>{item.width * item.length} (m2)</Text>
                    </View>
                </View>
            </View>
        )
    }

    componentDidMount() {
        this._mounted = true;
        if (this._mounted) {
            this.getListProps();
        }
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        const {propertyList} = this.state;
        // if (loading) {
        //     return (
        //         <View style={styles.flatlistContainer}>
        //             <ActivityIndicator size="large" />
        //         </View>
        //     )
        // }
        // else {
            return(
                <View style={styles.flatlistContainer}>
                    <FlatList
                     data={propertyList}
                     keyExtractor={item => item.id}
                     renderItem={this.renderItem}
                    />
                </View>
            )
        // }
    }
}

export default RealEstateInforByType;
