'use strict';

import { StyleSheet } from 'react-native';
import { Platform, Dimensions } from 'react-native';
import Configs from '../../configs';

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerHeader: {
        height: Configs.appSpacerHeader + Platform.select({
            android: 56,
            default: 44,
        }),
        paddingTop: Configs.appSpacerHeader,
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Configs.ColorSparetor
    },
    containerItemHeader: {
        width: 50, height: 50,
        justifyContent: 'center', alignItems: 'center'
    },
    containerHeaderBTNCollection: {
        flex: 1, height: '100%',
        justifyContent: 'center', alignItems: 'center',
        flexDirection: 'row',
    },
    contanerHeaderSearch: {
        ...StyleSheet.absoluteFill,
        top: Configs.appSpacerHeader - 1,
        bottom: 1,
        //height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row', alignItems: 'center',
    },
    headertxtInputSearch: {
        height: 30, width: width - 80, marginHorizontal: 15,
        borderRadius: 100,
        backgroundColor: Configs.ColorBackground, paddingHorizontal: 15
    },
    footerBTNQuantity: {
        justifyContent: 'center', alignItems: 'center',
        width: 80,
        paddingHorizontal: 15
    },
    footerSperator: {
        marginVertical: 10,
        width: Configs.SperatorLine,
        backgroundColor: '#fff'
    },
    modalContainerList: {
        width: width - 20, height: 400,
        //width:'80%', height: 250,
        backgroundColor: '#fff',
        borderRadius: Configs.BorderRadius,
        padding: 20,
    },
    modalContainer: {
        backgroundColor: '#00000065',
        padding: 50,
        //paddingTop: Platform.OS == 'ios' ? 60 + Configs.appSpacerHeader : 40 + Configs.appSpacerHeader,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalArrowRotation: {
        position: 'absolute',
        top: Platform.OS == 'ios' ? 57 + Configs.appSpacerHeader : 57,
        backgroundColor: '#fff',
        width: 30, height: 30,
        borderRadius: 4,
        transform: [{ rotate: "45deg" }]
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    mapView: {
        flex: 1,
        justifyContent: "center",
        height: "50%",
        width: "100%"
    },
    containerFilter: {
        width: '80%', marginHorizontal: '10%',
        height: 450, backgroundColor: '#fff',
        borderRadius: Configs.BorderRadius, overflow: 'hidden'
    },
    containerHeaderFilter: {
        flexDirection:'row',
        height: 50, width: '100%',
        paddingRight: 10,
        paddingLeft: 15,
        justifyContent: 'center', alignItems: 'center',
        borderBottomColor: Configs.ColorSparetor, borderBottomWidth: Configs.SperatorLine
    },
    containerFilterBody: {
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: Configs.ColorSparetor, borderBottomWidth: Configs.SperatorLine
    },
    containerFilterBottom: {
        height: 50, width: '100%',
        borderBottomColor: Configs.ColorSparetor,
        borderBottomWidth: Configs.SperatorLine,
        flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center', alignContent: 'center',
    },
    containerPress: {
        width: '80%', marginHorizontal: '10%',
        height: 400, backgroundColor: '#fff',
        borderRadius: Configs.BorderRadius, overflow: 'hidden'
    },
    containerHeaderPress: {
        flexDirection:'row',
        height: 50, width: '100%',
        paddingRight: 10,
        paddingLeft: 20,
        justifyContent: 'center', alignItems: 'center', alignContent: 'center',
        borderBottomColor: Configs.ColorSparetor, borderBottomWidth: Configs.SperatorLine
    },
    containerPressBody: {
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: Configs.ColorSparetor, borderBottomWidth: Configs.SperatorLine
    },
    containerPressBottom: {
        height: 50, width: '100%',
        borderBottomColor: Configs.ColorSparetor,
        borderBottomWidth: Configs.SperatorLine,
        flexDirection: 'row'
    }

});

export default styles;
