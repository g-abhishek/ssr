import Home from "./pages/Home";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import { fetchPosts, fetchPostByID } from "./store/slices/post.slice";

export default [
  {
    path: "/",
    element: Home,
    loadData: async (store) => {},
  },
  {
    path: "/posts",
    element: Posts,
    loadData: async (store) => {
      await store.dispatch(fetchPosts()); // assuming a thunk action
    },
  },
  {
    path: "/posts/:id",
    element: Post,
    loadData: async (store, params) => {
      await store.dispatch(fetchPostByID(params.id)); // assuming a thunk action
    },
  },
];
