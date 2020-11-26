// @flow
import React, {Component} from "react";
import {View, Text} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title, Tabs, Tab, ScrollableTab} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import RealEstateInforByType from './RealEstateInforByType/RealEstateInforByType'
class RealEstateInformation extends Component {
	
    render() {
        const {parent, categoryList, getListProperty, propertyList, reloadComponent, loading, handleChildState} = this.props
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
                        <Title>Thông tin bất động sản</Title>
                    </View>
                    <Right />
                </Header>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    {categoryList.map(item => {
                        return (
                            <Tab key={item.id} heading={item.name}>
                                <RealEstateInforByType
                                    getListProperty={getListProperty}
                                    propertyType={item.id}
                                    handleChildState={handleChildState}
                                    loading={loading}
                                    propertyList={propertyList}
                                    reloadComponent={reloadComponent}
                                />
                            </Tab>
                        )
                    })}
                </Tabs>
            </Container>
            
        )
    }
}

export default RealEstateInformation;
