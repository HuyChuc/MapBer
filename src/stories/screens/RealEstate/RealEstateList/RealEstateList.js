// @flow
import React, {Component} from "react";
import {View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';
import {getListProperty} from '../api';

const defaultImg = require('../../../../../assets/contact-icon.png');
class RealEstateList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyList: [],
            pageSize: 999,
            pageIndex: 0
        }
    }

    getListProps = () => {
        const {pageIndex, pageSize} = this.state;
        getListProperty(pageSize, pageIndex)
        .then(propertyList => {
            this.setState({propertyList})
        })
    }
    
    renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('RealEstateDetail', {propertyId: item.id, propertyTitle: item.title})}
                style={styles.itemContainer}>
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
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        this.getListProps();
    }

    render() {
        const {propertyList} = this.state;
        return(
            <Container>
                <Header>
                    <Left/>
                    <View style={{justifyContent: 'center'}}>
                        <Title>Thông tin bất động sản</Title>
                    </View>
                    <Right />
                </Header>
                <View style={styles.flatlistContainer}>
                    <FlatList
                        data={propertyList}
                        keyExtractor={item => item.id}
                        renderItem={this.renderItem}
                    />
                </View>
            </Container>
        )
    }
}

export default RealEstateList;
