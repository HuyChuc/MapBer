import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './config/navigation';
import Configs from './configs';
export default () => {
    return (
        <View style={{ flex: 1, backgroundColor: Configs.Color }}>
            <Navigation />
        </View>
    )
}