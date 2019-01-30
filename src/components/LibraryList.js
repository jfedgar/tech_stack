import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    console.log(library);
    return <ListItem library={library} />;
  }

  render() {
    // the 'props' object will have libraries key
    // that refers to the list of libraries
    console.log(this.props);

    // Now we are going to use a FlatList to render the list view on the screen
    // note that the way list view renders things is by only having enough
    // components to fill the screen. When a user scroll event is registered
    // (say they are scrolling up), the component at the top is taken off, moved
    // to the bottom, and re-rendered with the new item inside of it (so we are
    // reusing components that "fall off the screen")
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id}
      />
    );
  }
}

// whatever object is returned by mapStateToProps are passed as props to the
// component. Each key is a new prop
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// 'connect()' is the glue that we use to get data from our store
//   it takes a function as a first argument
//   inside connect() it will pass the state of the application
//   (gathered from Provider/the store) into our mapStateToProps function
// the 'connect()' function returns another function
//   into which we pass the LibraryList
//   (where it presumably then applies the keys from the object returned by
//   mapStateToProps as props on LibraryList)
//
// It should also be noted that when the application first boots up it will run
// all registered reducers to create an initial state (before you ever call
// dispatch with an action)
// You must design a reducer assuming that it will be called over and over again 
//   and at random points in time. This is part of why we specify action types
//   (so a reducer can ignore types it doesn't care about)
//   We must also respond to the initial boot correctly by returning some type
//   of initial state
export default connect(mapStateToProps)(LibraryList);
