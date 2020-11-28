import * as React from "react";
import { Container, List, ListItem, Content, Button, Segment } from "native-base";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";
import Icon from 'react-native-vector-icons/AntDesign';
import {i18nUtil} from '../../../utils/i18n';
import styles from './styles';
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

	constructor(props) {
		super(props);
		this.state = {
			languageType: 'vi',
			routes: [
				{
					route: "RealEstateInformation",
					caption: i18nUtil('vi').t('reale_state_infor'),
				},
				{
					route: "RealEstateProject",
					caption: i18nUtil('vi').t('reale_state_project'),
				},
				{
					route: "RealEstateConsultant",
					caption: i18nUtil('vi').t('reale_state_consultant'),
				},
				{
					route: "RealEstateNews",
					caption: i18nUtil('vi').t('reale_state_news'),
				},
				{
					route: "Settings",
					caption: i18nUtil('vi').t('Settings'),
				}
			]
		}
	}

	componentDidMount() {
		i18nUtil('en');
	}

	render() {
		const {routes} = this.state;
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
					<View style={styles.segmentContainer}>
						<Segment style={styles.segmentStyles}>
							<Button
								onPress={() => i18nUtil('en')}
								first active>
								<Text style={styles.segmentText}>{i18nUtil('vi').t('english')}</Text>
							</Button>
							<Button onPress={() => i18nUtil('vi')}>
								<Text>{i18nUtil('vi').t('vietnamese')}</Text>
							</Button>
						</Segment>
					</View>
					
					<TouchableOpacity style={styles.logoutContainer}>
						<Icon name='logout' size={30} />
						<View style={styles.buttonLogoutStyle}>
							<Text>{i18nUtil('vi').t('logout')}</Text>
						</View>
					</TouchableOpacity>
				</Content>
			</Container>
		);
	}
}
