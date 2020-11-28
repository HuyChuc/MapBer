// @flow
import React, {Component} from "react";
import {View, Text, Image} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title, Tabs, Tab, ScrollableTab, Content} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import {getDetail} from '../api';
import styles from './styles';
class RealEstateDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: Object,
        }
    }

    getDetailInfor = () => {
        const {propertyId} = this.props.navigation.state.params;
        getDetail(propertyId)
        .then(detail => {
            console.log('detail: ', detail);
            this.setState({detail})
        })
    }

    componentDidMount() {
        this._mounted = true;
        if (this._mounted) {
            this.getDetailInfor();
        }
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        const {propertyTitle} = this.props;
        const {detail} = this.state;
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon
                            name="chevron-back"
                            size={30}
                            onPress={() => this.props.navigation.goBack()}
                        />
                        </Button>
                    </Left>
                    <View style={{justifyContent: 'center'}}>
                        <Title>Chi tiết</Title>
                    </View>
                    <Right />
                </Header>
                <Content style={styles.contentContainer}>
                    <Text style={styles.title}>{detail.title}</Text>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.titleText}>Thông tin bất động sản</Text>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Giá tiền: </Text>
                            <Text>{detail.price !== null ? detail.price + ' ' + 
                                                     detail.caT_UNIT_DETAIL_NAME : "Liên hệ"}</Text>
                        </View>
                        {detail.length !== '' && detail.width !== '' ?
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Diện tích: </Text>
                            <Text>{detail.width * detail.length} (m2)</Text>
                        </View>
                        : null
                        }
                        {detail.length !== '' ?
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Chiều dài: </Text>
                            <Text>{detail.length} (m2)</Text>
                        </View>
                        : null
                        }
                        {detail.width !== '' ?
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Chiều rộng: </Text>
                            <Text>{detail.length} (m2)</Text>
                        </View>
                        : null
                        }
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Hướng nhà, hướng đất: </Text>
                            <Text>{detail.caT_DIRECTION_NAME}</Text>
                        </View>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Loại bất động sản: </Text>
                            <Text>{detail.caT_REAL_ESTATES_TYPE_NAME}</Text>
                        </View>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Hình thức giao dịch: </Text>
                            <Text>{detail.caT_REAL_ESTATES_EXCHANGE_NAME}</Text>
                        </View>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Hình thức giao dịch: </Text>
                            {detail.approvE_USER === null ?
                            <Text>Chưa kiểm duyệt</Text>
                            : <Text>Đã kiểm duyệt</Text>
                            }
                        </View>
                    </View>
                    <View style={[styles.sectionContainer, {marginTop: 30}]}>
                        <Text style={styles.titleText}>Vị trí bất động sản</Text>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Địa chỉ: </Text>
                            <Text>{detail.address}</Text>
                        </View>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Địa bàn: </Text>
                            <Text>{detail.locality}</Text>
                        </View>
                    </View>
                    <View style={[styles.sectionContainer, {marginTop: 30}]}>
                        <Text style={styles.titleText}>Mô tả bất động sản</Text>
                        <View style={styles.dataValueContainer}>
                            <Text>{detail.description}</Text>
                        </View>
                    </View>
                    <View style={[styles.sectionContainer, {marginTop: 30}]}>
                        <Text style={styles.titleText}>Thông tin pháp lý</Text>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Thông tin pháp lý: </Text>
                            <Text>{detail.legaL_INFORMATION}</Text>
                        </View>
                    </View>
                    <View style={[styles.sectionContainer, {marginTop: 30}]}>
                        <Text style={styles.titleText}>Thông tin liên hệ</Text>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Họ tên: </Text>
                            <Text>{detail.fulL_NAME}</Text>
                        </View>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Email: </Text>
                            <Text>{detail.email}</Text>
                        </View>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.labelText}>Điện thoại: </Text>
                            <Text>{detail.tel}</Text>
                        </View>
                    </View>
                    <View style={[styles.sectionContainer, {marginTop: 30}]}>
                        <Text style={styles.titleText}>Ảnh giới thiệu</Text>
                        <View style={[styles.dataValueContainer, {justifyContent: 'center'}]}>
                            <Image source={{uri: detail.images}} style={{width: '90%', height: 500, resizeMode: 'cover'}} />
                        </View>
                    </View>
                </Content>
            </Container>
            
        )
    }
}

export default RealEstateDetail;
