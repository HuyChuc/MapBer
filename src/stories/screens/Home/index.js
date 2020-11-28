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
} from "native-base";
import {View, Text,Animated,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import i18n from '../../../utils/i18n';
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';



class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title>{i18n.t('home')}</Title>
          </Body>
          <Right />
        </Header>
          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={this.state.region}
              mapType={this.state.mapType}

            >
                {this.state.listMaps.map((item,index) => {
                return (
                  <Marker
                    key={index}
                    coordinate={item.marker}
                    
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
                  
                >
                 <Ionicons name="home-outline" style={styles.chipsIcon} size={18} />
                  <Text>{cat.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
        
          </View>
        
      </Container>
      
    );
  }
}


export default Home;
