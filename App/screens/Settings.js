import React from 'react';
import {Button, SafeAreaView} from 'react-native';
export default ({navigation}) => (
    <SafeAreaView>
        <Button title="Tooger Drawer" onPress={() => navigation.toggleDrawer()}/>
        <Button title="To Contacts" onPress={() => {
            navigation.navigate("Tabs",{screen:"Contacts"});
        }}/>
        <Button 
            title="To Actions" 
            onPress={() => {
                navigation.navigate("Tabs", {screen: "Actions", params: {userId: 1}});
            }}/>
    </SafeAreaView>
)