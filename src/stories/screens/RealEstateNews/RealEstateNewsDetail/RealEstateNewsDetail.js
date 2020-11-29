// @flow
import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import { Header, Container, Right, Left, Button, Body, Title, Tabs, Tab, ScrollableTab, Content } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { getDetail } from '../api';
import styles from './styles';
import Moment from 'moment';
class RealEstateNewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: Object,
        }
    }

    getDetailInfor = () => {
        const { pid } = this.props.navigation.state.params;
        console.log(pid);
        getDetail(pid)
            .then(detail => {
                console.log('detail: ', detail);
                this.setState({ detail })
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
        const { ptitle } = this.props;
        const { detail } = this.state;
        return (
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
                    <View style={{ justifyContent: 'center' }}>
                        <Title>Chi tiết</Title>
                    </View>
                    <Right />
                </Header>
                <Content style={styles.contentContainer}>
                    <Text style={styles.title}>{detail.title}</Text>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.publishDate}>{Moment(detail.publisH_DATE).format('MM/DD/YYYY')}</Text>
                        <Text style={styles.dest}>{detail.description}</Text>
                        <View style={styles.dataValueContainer}>
                            <Text style={styles.author}>{detail.author}</Text>
                        </View>
                    </View>
                </Content>
            </Container>

        )
    }
}

export default RealEstateNewsDetail;
