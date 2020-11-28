import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps'; 
import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Right,
  TextInput
} from "native-base";
import {View, Text,Animated,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import {i18nUtil} from '../../../utils/i18n';
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AnimatedDetail from './AnimatedDetail';
import { map } from 'lodash';


class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left/>

          <Body>
            <Title>{i18nUtil('vi').t('home')}</Title>
          </Body>
          <Right />
        </Header>
          <View style={styles.container}>
            <MapView
              ref={map => this._map = map}
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={this.state.region}
              mapType={this.state.mapType}
              showsMyLocationButton={true}
              showsUserLocation={true}
             

            >
                {this.state.listMaps.map((item,index) => {
                return (
                  <Marker
                    key={index}
                    coordinate={item.marker}
                    title={item.title}
                    description={item.owner}
                    
                  >
                   
                    <Animated.View style={[styles.markerWrap]}>
                      <Animated.Image
                       source={{
                        uri: item.icon,
                        cache: 'only-if-cached'
                      }}
                        style={styles.marker}
                        resizeMode="cover"
                      />
                    </Animated.View>
                  </Marker>
                  )
                  })}
            </MapView>
          
            <ScrollView
              horizontal
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              height={50}
              style={styles.chipsScrollView}
              contentInset={{ // iOS only
                top:0,
                left:0,
                bottom:0,
                right:0
              }}
              contentContainerStyle={{
                paddingRight: Platform.OS === 'android' ? 20 : 0
              }}
            >
              {this.state.category.map((cat, index) => (
                <TouchableOpacity key={index} style={styles.chipsItem} 
                onPress={()=> this.getBySelectCate(cat.id)}
                >
                  <Text>{cat.title}</Text>
                 
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={styles.mapType} >
                <TouchableOpacity style={{ backgroundColor: '#fff', opacity: 1, borderRadius: 10, width: 35, height: 35, justifyContent: 'center', alignItems: 'center', margin: 10 }}
                  onPress={() => {
                    this.setState({ filter: { title: 'Kiểu bản đồ', data: this.state.type }, showModalFilter: true, currentOperation: 'type' });
                  }} >
                  <Icon name="ios-book" color="#4F8EF7" />
                </TouchableOpacity>
                
                

            </View>
            <AnimatedDetail listMaps={this.state.listMaps} />
            
        
          </View>
        
      </Container>
      
    );
  }
}


export default Home;
