// @flow
import React, {Component} from "react";
import {View, Text} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title, Tabs, Tab, ScrollableTab} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
class RealEstateConsultant extends Component {
	
    render() {
        const {props, categoryList} = this.props
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon
                            name="chevron-back"
                            size={30}
                            onPress={() => props.navigation.goBack()}
                        />
                        </Button>
                    </Left>
                    <View style={{justifyContent: 'center'}}>
                        <Title>Thông tin nhà tư vấn bất động sản</Title>
                    </View>
                    <Right />
                </Header>
                {categoryList.map(item => {
                        return (
                            <Text>{item.id}</Text>
                        )
                    })}
            </Container>
            
        )
    }
}

export default RealEstateConsultant;
