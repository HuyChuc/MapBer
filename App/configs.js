'use strict';

import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants'
let appSpacerHeader = 0;
let appSpacerFooter = 0
const heightHeader = Platform.select({
    android: 56,
    default: 44,
})
if (Platform.OS == "android") {
    appSpacerHeader = Constants.statusBarHeight;
} else {
    if (Constants.statusBarHeight > 20) {
        appSpacerHeader = Constants.statusBarHeight;
        appSpacerFooter = 25;
    } else {
        appSpacerHeader = Constants.statusBarHeight;
    }
}
const configs = {
    VERSION: `${Constants.branch} - 1.0.${Constants.versionCode}`,

    Color: "#ab2664",
    ColorBTNDisable: "#df84ae",
    ColorSecondary: "#2E2E2E",
    ColorBackground: '#f7f7f7',
    ColorError: '#ee6d53',
    ColorDisable: "#73737380",
    ColorText: "#838584",
    ColorSparetor: '#DBDBDF',

    BorderRadius: 5,
    SperatorLine: StyleSheet.hairlineWidth,
    appSpacerHeader,
    appSpacerFooter,
    heightHeader,
    ElevationShadow: Platform.OS == 'android' ?
        { elevation: 2 }
        :
        {
            shadowOffset: { width: -1, height: 2 },
            shadowColor: '#00000040',
            shadowOpacity: 0.2,
        },
    //FONT_DEFAULT: "brandon",
    //FONT_BOLD: "brandon-bold",
    HostDomain: Constants.apiHost,
};

export default configs;
