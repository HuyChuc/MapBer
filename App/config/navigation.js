import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { createDrawerNavigator } from '@react-navigation/drawer';

import ContactsList from '../screens/ContactsList';
import ContactDetails from '../screens/ContactDetails';

import ActionsList from '../screens/ActionsList';
import ActionDetails from '../screens/ActionDetails';

import Settings from '../screens/Settings';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Loading from '../screens/Loading';
import Modal from '../screens/Modal';

import { View } from 'react-native';


const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "red" }
    }}>
    <ContactsStack.Screen
      name="ContactsList"
      component={ContactsList}
      options={{
        headerTitle: 'Contacts',
      }}
    />
    <ContactsStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={({ route }) => {
        console.log(route);
        return {
          headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
          headerStyle: { backgroundColor: "green" }
        };
      }}
    />
  </ContactsStack.Navigator>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
)

const CreateNewPlaceholder = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
)

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator
    initialRouteName="Map"
    tabBarOptions={{
      activeTintColor: "red",
      activeBackgroundColor: "blue",
    }}
  >
    <AppTabs.Screen
      name="Contacts"
      component={ContactsStackScreen}
      options={{
        tabBarlabel: "Contact",
        tabBarIcon: props => (
          <Ionicons name="ios-contacts" size={props.size} color={props.color} />
        )
      }} />
    <AppTabs.Screen
      name="Create"
      component={CreateNewPlaceholder}
      options={{
        tabBarIcon: props => (
          <Ionicons name="ios-add" size={props.size} color={props.color} />
        )
      }}
      listeners={({ navigation }) => ({
        tabPress: event => {
          event.preventDefault();
          navigation.navigate('CreateNew');
        }
      })}
    />
    <AppTabs.Screen
      name="Actions"
      component={ActionsStackScreen}
      options={{
        tabBarIcon: props => (
          <Ionicons name="ios-checkmark-circle-outline" size={props.size} color={props.color} />
        )
      }} />
      {/* <AppTabs.Screen
      name="Map"
      component={HomeStack}
      options={{
        tabBarlabel: "Map",
        tabBarIcon: props => (
          <Ionicons name="os-map" size={props.size} color={props.color} />
        )
      }} /> */}
  </AppTabs.Navigator>
)

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator
    drawerType="slide" // kieu hien thi
    drawerPosition="left" // hien thi tu ben trai
  >
    <AppDrawer.Screen
      name="Tabs"
      component={AppTabsScreen}
      options={{
        drawerLabel: 'Home',
      }}
    />
    <AppDrawer.Screen
      name="Settings"
      component={Settings}
      options={{
        gestureEnabled: false, // chặn vuốt ngang hiện menu
      }}
    />
  </AppDrawer.Navigator>
)

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

const CreateNew = () => (
  <View style={{ flex: 1, backgroundColor: 'red' }}></View>
);
const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);
  return (
    // khong hien thi group header headermode none
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal"

    >
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Loading} />
      ) : user ? (
        <RootStack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
      ) : (
            <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
          )}
      <RootStack.Screen name="CreateNew" component={CreateNew} options={{ animationEnabled: true }} />
      <RootStack.Screen name="Modal" component={Modal} options={{ animationEnabled: true }} />
      <RootStack.Screen name="Alert" component={Modal} options={{
        animationEnabled: true,
        cardStyle: {
          backgroundColor: 'rgba(0,0,0,0.15)',
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp',
                }),
              },
            }
          }
        }
      }} />
    </RootStack.Navigator>
  )
}

export default () => {

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}