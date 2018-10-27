import React from 'react';
//import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import StyledText from './components/StyledText';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    /*if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
    */
   return (
    <StyledText>Hallo Welt</StyledText>
  );
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}