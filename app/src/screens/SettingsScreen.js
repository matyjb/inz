import React, {Component} from 'react';
import {ThemeConstants} from '../constants/ThemeConstants';
import {Container, Button, Text, Content} from 'native-base';
import {ThemeContext} from '../contexts/ThemeContext';
import {GlobalContext} from '../contexts/GlobalContext';

class SettingsScreen extends React.Component {
  static navigationOptions = ({screenProps}) => {
    let t = ThemeConstants[screenProps.theme];

    return {
      title: 'Ustawienia',
      headerTintColor: 'white',
      headerStyle: {backgroundColor: t.headerColor},
    };
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({t, toggleTheme, theme}) => (
          <Container>
            <Content style={{backgroundColor: t.primaryColor}}>
              <Button onPress={() => toggleTheme()}>
                <Text>
                  zmień motyw na {theme == 'dark' ? 'jasny' : 'ciemny'}
                </Text>
              </Button>
              <GlobalContext.Consumer>
                {({downloadAllStops}) => (
                  <Button onPress={() => downloadAllStops()}>
                    <Text>pobierz przystanki</Text>
                  </Button>
                )}
              </GlobalContext.Consumer>
            </Content>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}
// const styles = StyleSheet.create({});

export default SettingsScreen;
