import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.item.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;
    //console.log(this.props);
    //console.log(this.props.library);

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// 'state' is the state of the redux store
// ownProps are the props of the component
const mapStateToProps = (state, ownProps) => {
  // note: this 'state' is coming from the redux store, not the component's state
  //   the name of each piece of state is determined by the key we gave it in the
  //   combineReducers method in the src/reducers/index.js file
  // also note: if we did { libraryId: state.selectedLibraryId } then we could access it
  //   through this.props.libraryId
  //return { selectedLibraryId: state.selectedLibraryId };

  const expanded = (state.selectedLibraryId === ownProps.library.item.id);
  // shorthand for { expanded: expanded }
  return { expanded };
};

// Here we don't want to map state to props (first argument to connect())
//   connect() can also be used to take an object of action creators and bind them to
//   the component
// "Take these actions, whenever they are called, make sure they go to the right place,
//   then, pass the actions into the component as props"
// In practice, it will add a function for each action in 'actions' to the props
//   (this.props.selectLibrary() see onPress above)
//   (one to each of the libraries as well (?))
//   in this case, selectLibrary (from src/actions/index.js) which we can pass a
//   libraryId to. Calling this function will now automatically dispatch it to
//   all reducers in the application (sent in in Provider store={createStore(reducers)})
// Another way of putting it, in the onPress event above _all_ actions are sent to all reducers
//   the reducers update their states accordingly
//   then mapStateToProps is called on any component where it is implemented (through connect())
//   that component may or may not update its props accordingly. If its props do
//   change, the component is automatically rerendered
export default connect(mapStateToProps, actions)(ListItem);
