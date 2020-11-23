import React from 'react';
import {Button, View} from 'react-native';
export default ({navigation}) => (
    <View>
        <Button title="Sign In" onPress={() => alert('todo!')}/>
        <Button title="Sign Up" onPress={() => navigation.push("SignUp")}/>
    </View>
);