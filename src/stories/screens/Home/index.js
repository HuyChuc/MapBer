import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import {Text} from 'react-native';

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
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
            <Title>Trang chủ</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Trang chủ</Text>
        </Content>
      </Container>
    );
  }
}

export default Home;
