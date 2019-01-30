// this is an action creator. An action creator is a function that returns an action
// (remember that an action is an object with at least a 'type' property)
// This action will then be passed into the dispatcher in order to trigger any (and all)
// reducers in the store that respond to its 'type' to update the state
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
