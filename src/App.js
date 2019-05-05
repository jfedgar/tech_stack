// this app demonstrates redux as well as an efficient list view for long lists
// It also demonstrates basic animation in ListItem

// note: reducers/index.js and LibraryReducer contains some notes on imports and exports

import React from 'react';
import { View } from 'react-native';
// Provider is the communication glue between react and redux:
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  // note: when you send an action into a store via dispatch, that action is
  // sent to every reducer in a store
  // So, we have a folder called src/reducers that contains our LibraryReducer
  //   LibraryReducer grabs a hardcoded list of libraries from a json file and
  //   returns it always (so no matter what action goes into that reducer it
  //   always returns the list of libraries)
  //   Then, we use a react component called LibraryList
  // Provider is a react component that aids in communication between react and redux
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText='Tech Stack' />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
