// @flow
import React, {Component} from "react";
import {View, Text} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
class RealEstateProject extends Component {
	
    render() {
        const {props} = this.props
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
                        <Title>Dự án</Title>
                    </View>
                    <Right />
                </Header>
                <View>
                    <Text>Dự án</Text>
                </View>
            </Container>
            
        )
    }
}

export default RealEstateProject;
