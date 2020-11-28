// @flow
import React, {Component} from "react";
import {View, Text} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title, Tabs, Tab, ScrollableTab} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import RealEstateNewsByType from './RealEstateNewsByType/RealEstateNewsByType'
import {getCategoryList} from './api';
class RealEstateNews extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._mounted = true;
    }

    componentWillUnmount() {
        this._mounted = false
    }
    
    render() {
        const {parent} = this.props;
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon
                            name="chevron-back"
                            size={30}
                            onPress={() => parent.props.navigation.goBack()}
                        />
                        </Button>
                    </Left>
                    <View style={{justifyContent: 'center'}}>
                        <Title>Tin tức</Title>
                    </View>
                    <Right />
                </Header>
                
                <RealEstateNewsByType parent={parent} />
            </Container>
            
        )
    }
}

export default RealEstateNews;
