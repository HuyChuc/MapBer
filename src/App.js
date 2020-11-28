// @flow
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import RealEstateInformationContainer from './container/RealEstateInformationContainer';
import RealEstateList from './stories/screens/RealEstate/RealEstateList/RealEstateList';
import RealEstateDetail from './stories/screens/RealEstateInformation/RealEstateDetail/RealEstateDetail';
import RealEstateNewsDetail from './stories/screens/RealEstateNews/RealEstateNewsDetail/RealEstateNewsDetail';
import RealEstateConsultantDetail from './stories/screens/RealEstateConsultant/RealEstateConsultantDetail/RealEstateConsultantDetail';
import RealEstateProjectDetail from './stories/screens/RealEstateProject/RealEstateProjectDetail/RealEstateProjectDetail';
import RealEstateProjectContainer from './container/RealEstateProjectContainer';
import MyRealEstateView from './stories/screens/MyRealEstate/MyRealEstateView/MyRealEstateView';
import RealEstateNewsContainer from './container/RealEstateNewsContainer';
import RealEstateConsultantContainer from './container/RealEstateConsultantContainer';
import SettingsContainer from './container/SettingsContainer';
import Sidebar from "./container/SidebarContainer";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';


const Drawer = createDrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />
	}
);

const AppLogin = createStackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		RealEstateInformation: { screen: RealEstateInformationContainer },
		RealEstateProject: { screen: RealEstateProjectContainer },
		RealEstateNews: { screen: RealEstateNewsContainer },
		RealEstateConsultant: { screen: RealEstateConsultantContainer },
		Settings: { screen: SettingsContainer },
		Drawer: { screen: Drawer },
		RealEstateDetail: { screen: RealEstateDetail },
		RealEstateNewsDetail: { screen: RealEstateNewsDetail },
		RealEstateConsultantDetail: { screen: RealEstateConsultantDetail },
		RealEstateProjectDetail: { screen: RealEstateProjectDetail }
		// TabScreens: {screen: TabScreens}
	},
	{
		initialRouteName: "Drawer",
		headerMode: "none",
		navigationOptions: {
			header: null
		}
	}
);

// drawer real estate
const DrawerRealEstate = createDrawerNavigator(
	{
		RealEstateList: {screen: RealEstateList}
	},
	{
		initialRouteName: 'RealEstateList',
		contentComponent: props => <Sidebar {...props} />
	}
)

const RealEstate = createStackNavigator(
	{
		DrawerRealEstate: {screen: DrawerRealEstate},
		RealEstateDetail: { screen: RealEstateDetail },
		RealEstateProjectDetail: { screen: RealEstateProjectDetail },
		RealEstateNewsDetail: { screen: RealEstateNewsDetail },
		RealEstateConsultantDetail: { screen: RealEstateConsultantDetail },
		RealEstateInformation: { screen: RealEstateInformationContainer },
		RealEstateProject: { screen: RealEstateProjectContainer },
		RealEstateNews: { screen: RealEstateNewsContainer },
		RealEstateConsultant: { screen: RealEstateConsultantContainer },
		Settings: { screen: SettingsContainer },
	},
	{
		initialRouteName: 'DrawerRealEstate',
		headerMode: 'none',
		navigationOptions: {
			header: null
		}
	}
)

// drawer my real estate
const DrawerMyRealEstate = createDrawerNavigator(
	{
		MyRealEstateView: {screen: MyRealEstateView}
	},
	{
		initialRouteName: 'MyRealEstateView',
		contentComponent: props => <Sidebar {...props} />
	}
)

const MyRealEstate = createStackNavigator(
	{
		DrawerMyRealEstate: {screen: DrawerMyRealEstate},
		RealEstateDetail: { screen: RealEstateDetail },
		RealEstateProjectDetail: { screen: RealEstateProjectDetail },
		RealEstateNewsDetail: { screen: RealEstateNewsDetail },
		RealEstateConsultantDetail: { screen: RealEstateConsultantDetail },
		RealEstateInformation: { screen: RealEstateInformationContainer },
		RealEstateProject: { screen: RealEstateProjectContainer },
		RealEstateNews: { screen: RealEstateNewsContainer },
		RealEstateConsultant: { screen: RealEstateConsultantContainer },
		Settings: { screen: SettingsContainer },
	},
	{
		initialRouteName: 'DrawerMyRealEstate',
		headerMode: 'none',
		navigationOptions: {
			header: null
		}
	}
)

const RealEstateMap = createStackNavigator(
	{
		Home: {screen: Home}
	},
	{
		initialRouteName: 'Home',
		headerMode: "none",
		navigationOptions: {
			header: null
		}
	}
)

const getTabBarIcon = (navigation, focused, tintColor) => {
	const { routeName } = navigation.state;
	let IconComponent = Icon;
	let iconName;
	let iconType;
	if (routeName === "Bất động sản") {
		iconName = "activity";
		iconType = "feather";
	}

	else if (routeName === "Bất động sản của tôi") {
		iconName = "book-open-page-variant";
		iconType = "material-community";
	}

	else if (routeName === "Bản đồ") {
		iconName = "list-alt";
		iconType = "font-awesome";
	}

	else if (routeName === "Cài đặt") {
		iconName = "ios-notifications";
		iconType = "ionicon";
	}

	// You can return any component that you like here!
	return <IconComponent name={iconName} size={25} color={tintColor} type={iconType} />;
};

const AppBottomTab = createBottomTabNavigator({
	'Bất động sản': {
		screen: RealEstate,
		navigationOptions:({navigation}) =>  ({
			tabBarIcon: ({ focused, tintColor }) =>
			getTabBarIcon(navigation, focused, tintColor),
		})
	},
	'Bản đồ': {
		screen: RealEstateMap,
		navigationOptions:({navigation}) =>  ({
			tabBarIcon: ({ focused, tintColor }) =>
			getTabBarIcon(navigation, focused, tintColor),
		})
	},
	'Bất động sản của tôi': {
		screen: MyRealEstate,
		navigationOptions:({navigation}) =>  ({
			tabBarIcon: ({ focused, tintColor }) =>
			getTabBarIcon(navigation, focused, tintColor),
		})
	},
	'Cài đặt': {
		screen: SettingsContainer,
		navigationOptions:({navigation}) =>  ({
			tabBarIcon: ({ focused, tintColor }) =>
			getTabBarIcon(navigation, focused, tintColor),
		})
	}
})

const App = createAppContainer(AppBottomTab);

export default () => (
	<Root>
		<App />
	</Root>
);
