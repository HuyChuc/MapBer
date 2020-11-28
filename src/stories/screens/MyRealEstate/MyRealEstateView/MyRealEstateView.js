import { extend } from 'lodash';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'

class MyRealEstateView extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon
                                active
                                size={30}
                                name="menu"
                                onPress={() => this.props.navigation.openDrawer()}
                            />
                        </Button>
                    </Left>
                    <View style={{justifyContent: 'center'}}>
                        <Title>Bất động sản của tôi</Title>
                    </View>
                    <Right />
                </Header>
                <View>
                    <Text>Bất động sản của tôi</Text>
                </View>
            </Container>
            
        )
    }
}

export default MyRealEstateView;