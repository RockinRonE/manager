import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}


