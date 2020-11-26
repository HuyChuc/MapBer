/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  touchableStyles: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#d0d0d0',
    padding: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 60,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#d0d0d0',
    padding: 10,
  },
  avatarStyles: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  imageBackground: {
    width: '100%',
    height: height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    color: '#333',
  },
  logoutContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentStyles: {
    flex: 1
  },
  buttonLogoutStyle: {
    width: '30%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentStyles: {
    bottom: 60
  },
  segmentText: {
    color: '#fff'
  }
});

export default styles;
