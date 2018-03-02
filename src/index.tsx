import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

export default class ReactNativeStarter extends React.Component {
  public render(): JSX.Element {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
