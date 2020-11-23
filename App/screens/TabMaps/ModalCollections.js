'use strict';

import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, Image, Modal, TouchableOpacity, } from 'react-native';

import Configs from '../../configs';
import style from './style';
import { Button, TextCustom, ImageCustom} from '../../view_components/control.js';
import * as Icon from '@expo/vector-icons'

const ModalCollections = (props) => {
    const { onClose, visible, data, onPress, itemPicked } = props
    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={visible}
            transparent={true}
            onRequestClose={onClose}>
            <View style={style.modalContainer} >
                <TouchableOpacity
                    style={StyleSheet.absoluteFill}
                    onPress={onClose}
                />
                {/* <View style={style.modalArrowRotation} /> */}
                <View style={style.modalContainerList}>
                    <TextCustom>{data.name}</TextCustom>
                    
                    <TextCustom>{data.fulL_TEXT}</TextCustom>
                    
                    <ImageCustom url={data.icon} ></ImageCustom >


                    <TextCustom>{data.address}</TextCustom>
                </View>
            </View>
        </Modal >
    );
}
export default ModalCollections