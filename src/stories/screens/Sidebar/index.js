import * as React from "react";
import { Container, List, ListItem, Content, Button, Segment } from "native-base";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
const routes = [
	{
		route: "RealEstateInformation",
		caption: "Thông tin bất động sản",
	},
	{
		route: "RealEstateProject",
		caption: "Dự án",
	},
	{
		route: "RealEstateNews",
		caption: "Tin tức",
	},
];
const defaultAvatar = require('../../../../assets/contact-icon.png');
export interface Props {
	navigation: any,
}
export interface State {}
const resetAction = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<View style={styles.avatarContainer}>
					<Image source={defaultAvatar} style={styles.avatarStyles} />
					<Text style={[styles.textStyles, {fontSize: 17}]}>RealEstate</Text>
				</View>
				<Content contentContainerStyle={styles.contentStyles}>
					<List
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										data.route === "Login"
											? this.props.navigation.dispatch(resetAction)
											: this.props.navigation.navigate(data.route);
									}}
								>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
					<Segment style={{position: 'absolute', bottom: 50}}>
						<Button first>
							<Text>Puppies</Text>
						</Button>
						<Button active>
							<Text>Kittens</Text>
						</Button>
						<Button last>
							<Text>Cubs</Text>
						</Button>
					</Segment>
					<TouchableOpacity style={styles.logoutContainer}>
						<Icon name='logout' size={30} />
						<View style={styles.buttonLogoutStyle}>
							<Text>Đăng xuất</Text>
						</View>
					</TouchableOpacity>
				</Content>
			</Container>
		);
	}
}
