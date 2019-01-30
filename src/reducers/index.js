import { combineReducers } from 'redux';
// note: when we use the { } we are specifying which exports we want (but they
// must be specified as exports in the other file)
// When we want to simply name the 'default' export we don't use the {}, for example:
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// note: we are exporting the _results_ of calling combineReducers here
//   (probably a method or object)
// I *think* we could also pass in a single reducer to the createStore method (in App.js)
//   if we only had one. Then we could skip the step of calling combineReducers and
//   exporting the results (and also skip index.js in the reducers/ folder)
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});

// console.log(store.getState());
// => { libraries: [ { id: 1, title: 'Webpack', description: "..." }, ... ] }
