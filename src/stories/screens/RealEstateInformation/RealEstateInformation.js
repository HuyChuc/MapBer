// @flow
import React, {Component} from "react";
import {View, Text} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title, Tabs, Tab, ScrollableTab} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import RealEstateInforByType from './RealEstateInforByType/RealEstateInforByType'
import {getCategoryList} from './api';
class RealEstateInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
        }
    }

    getCatList = () => {
        getCategoryList()
        .then(categoryList => {
            this.setState({categoryList})
        })
    }

    componentDidMount() {
        this._mounted = true;
        if (this._mounted) {
            this.getCatList();
        }
    }

    componentWillUnmount() {
        this._mounted = false
    }
    
    render() {
        const {categoryList} = this.state;
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
                        <Title>Thông tin bất động sản</Title>
                    </View>
                    <Right />
                </Header>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                    {categoryList.map(item => {
                        return (
                            <Tab key={item.id} heading={item.name}>
                                <RealEstateInforByType item={item} propertyTypeId={item.id} parent={parent}/>
                            </Tab>
                        )
                    })}
                </Tabs>
            </Container>
            
        )
    }
}

export default RealEstateInformation;
