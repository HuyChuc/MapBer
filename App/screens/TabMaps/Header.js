'use strict';

import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import style from './style';
import Configs from '../../configs';
import { Button, TextCustom } from '../../view_components/control.js';
import i18n from 'i18n-js';
import * as Icon from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

const HeaderCheckout = (props) => {
    var [dataSearch, setDataSearch] = useState({ isSearch: false, search: '' });
    var refSearch = null;
    const _evtShowSearch = () => setDataSearch({ isSearch: true, search: '' });
    const _evtHideSearch = async () => {
        await refSearch.fadeOutUp(350);
        setDataSearch({ isSearch: false, search: '' })
        props.onChangeSearch ? props.onChangeSearch('') : null
    }
    const _onSearch = (val) => {
        setDataSearch({ isSearch: true, search: val })
        props.onChangeSearch ? props.onChangeSearch(val) : null
    }
    const _onSubmitSearch = (val) => {
        setDataSearch({ isSearch: true, search: val })
        props.onSubmitSearch ? props.onSubmitSearch(val) : null
    }
    const _onShowCollections = () => props.onCollectionsPressed();
    var { navigation, title } = props

    return (
        <View style={style.containerHeader}>
            <View style={{ height: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Button style={style.containerItemHeader}
                    rippleCentered={true}
                    rippleSize={50}
                    onPress={() => navigation.toggleDrawer()} >
                    <Icon.MaterialCommunityIcons name='apps' size={30} color={Configs.Color} />
                </Button>
                <Button
                    style={style.containerHeaderBTNCollection}
                    onPress={_evtShowSearch}>
                    <TextCustom style={{ fontSize: 18, color: Configs.Color, fontWeight: 'bold' }}>{i18n.t('tabMaps')}</TextCustom>
                </Button>
                <Button style={style.containerItemHeader}
                    rippleCentered={true}
                    rippleSize={50}
                    onPress={_evtShowSearch}>
                    <Icon.MaterialCommunityIcons name='magnify' size={30} color={Configs.Color} />
                </Button>
            </View>

            {dataSearch.isSearch ?
                <Animatable.View
                    ref={(refs) => refSearch = refs}
                    animation="fadeInDown"
                    duration={350}
                    style={style.contanerHeaderSearch}>

                    <TextInput
                        style={style.headertxtInputSearch}
                        placeholder={i18n.t('searchItem')}
                        autoFocus={true}
                        value={dataSearch.search}
                        onChangeText={_onSearch}
                        onSubmitEditing={_onSubmitSearch}
                    />
                    <Button style={style.containerItemHeader}
                        onPress={_evtHideSearch}>
                        <Icon.MaterialCommunityIcons name='window-close' size={30} color={Configs.Color} />
                    </Button>
                </Animatable.View>
                :
                null
            }
        </View>
    );
}
export default HeaderCheckout