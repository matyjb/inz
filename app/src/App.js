import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import { themes } from './theming';
import BusTramApiContextProvider from './contexts/BusTramApiContext';
import { Root } from 'native-base';
import ThemeProvider from 'react-native-theme-provider';

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return (
      <Root>
        <ThemeProvider themes={themes}>
          <BusTramApiContextProvider>
            <StatusBar barStyle="dark-content" />
            <AppContainer />
          </BusTramApiContextProvider>
        </ThemeProvider>
      </Root>
    )
  }
}

const styles = StyleSheet.create({});
