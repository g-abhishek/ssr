import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/post.slice";

const createStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      post: postReducer,
    },
    preloadedState,
  });
};

export default createStore;

/**
 * "createStore" is a custom function that:
 * Calls "configureStore" to create and return the Redux store.
 * "preloadedState" is passed in as an argument. This is optional and allows you to initialize the store with data (e.g., when restoring state from localStorage or server-side rendering).
 */

/**
 * reducer: This is an object that defines how the state is structured and what logic will handle the state updates
 * In this case:
 *      The post state will be managed by the postReducer (which handles actions and state changes related to posts)
 * preloadedState: This is the initial state that will be used to hydrate the store.
 * It's particularly useful if you need to pre-populate the store with data when the app is first loaded, such as from server-side rendering or local storage.
 */
