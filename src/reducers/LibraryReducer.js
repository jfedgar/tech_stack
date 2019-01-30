import data from './LibraryList.json';

// Note, we could create a function and then export it as a named export:
// const LibraryReducer = () => data;
// and then export it:
// export { LibraryReducer };
// and then import it in our other libraries by specifying it with curly braces:
// import { LibraryReducer } from './LibraryReducer';
// But because this is a default export, we get to name it whatever we want in
// our importing file:
// import LibraryReducer from './LibraryReducer';
// or 
// import FooBar from './LibraryReducer';
export default () => data;

