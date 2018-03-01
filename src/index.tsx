import React from 'react';
import { AppRegistry } from 'react-native';
import Login from './view/login';

export default class ReactNativeStarter extends React.Component {
  public render(): JSX.Element {
    return (
      <Login/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
