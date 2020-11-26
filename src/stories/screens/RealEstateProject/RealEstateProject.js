// @flow
import React, {Component} from "react";
import {View, Text} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title, Tabs, Tab, ScrollableTab} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import RealEstateProjectByType from './RealEstateProjectByType/RealEstateProjectByType'
class RealEstateProject extends Component {
	
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
                        <Title>Thông tin dự án</Title>
                    </View>
                    <Right />
                </Header>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    {categoryList.map(item => {
                        return (
                            <Tab key={item.id} heading={item.name}>
                                <RealEstateProjectByType />
                            </Tab>
                        )
                    })}
                </Tabs>
            </Container>
            
        )
    }
}

export default RealEstateProject;
