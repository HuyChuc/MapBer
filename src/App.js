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
import RealEstateProjectContainer from './container/RealEstateProjectContainer';
import RealEstateNewsContainer from './container/RealEstateNewsContainer';
import RealEstateConsultantContainer from './container/RealEstateConsultantContainer';
import SettingsContainer from './container/SettingsContainer';
import Sidebar from "./container/SidebarContainer";

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
		Drawer: { screen: Drawer }
	},
	{
		initialRouteName: "Drawer",
		headerMode: "none",
	}
);

const App = createAppContainer(AppLogin);

export default () => (
	<Root>
		<App />
	</Root>
);
