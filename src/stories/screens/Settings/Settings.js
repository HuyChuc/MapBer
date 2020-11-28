// @flow
import React, {Component} from "react";
import {View, Text} from 'react-native';
import {Header, Container, Right, Left, Button, Body, Title, Tabs, Tab, ScrollableTab} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {i18nUtil} from '../../../utils/i18n';
class Settings extends Component {
	
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
                        <Title>{i18nUtil('en').t('Settings')}</Title>
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

export default Settings;
