import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Left,
  Icon,
  Body,
  Button,
  Title,
  Right,
  Text,
  Content,
} from 'native-base';

class SettingsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Ustawienia</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button onPress={() => {}}>
            <Text>change theme</Text>
          </Button>
          <Button onPress={() => {}}>
            <Text>change theme</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({});

// export default withTheme(SettingsScreen);
export default SettingsScreen;
