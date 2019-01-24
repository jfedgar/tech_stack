// this app demonstrates redux as well as an efficient list view for long lists
import React from 'react';
import { View } from 'react-native';
// Provider is the communication glue between react and redux:
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText='Tech Stack' />
      </View>
    </Provider>
  );
};

export default App;
