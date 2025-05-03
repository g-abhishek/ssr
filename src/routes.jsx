import React from "react";
// const Home = React.lazy(() => import("./pages/Home"));
const Home = React.lazy(() => import("./pages/Home"));
const Post = React.lazy(() => import("./pages/Post"));
const Posts = React.lazy(() => import("./pages/Posts"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

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
      try {
        await store.dispatch(fetchPosts()); // assuming a thunk action
      } catch (err) {
        console.error("Error loading posts:", err);
      }
    },
  },
  {
    path: "/posts/:id",
    element: Post,
    loadData: async (store, params) => {
      try {
        await store.dispatch(fetchPostByID(params.id)); // assuming a thunk action
      } catch (err) {
        console.error(`Error loading post ${params.id}:`, err);
      }
    },
  },
  {
    path: "*",
    element: ErrorPage,
    loadData: async (store, params) => {},
  },
];

/**
 * How React.lazy Works
 * ✅ What it does:
 *    React.lazy() lets you dynamically import components.
 *    It works with <Suspense> to show a fallback UI during loading.
 * 
 * ⛔ Drawbacks in SSR:
 * Runs only in the browser (client-side):
 *  React.lazy() defers loading the component until runtime in the browser.
 *  On the server, it has no way to wait for or preload the component.
 *  That means the server can’t render it ahead of time → blank/empty content.
 * Fails silently in SSR:
 *  ReactDOMServer.renderToString() can’t handle React.lazy() out of the box.
 *  You’ll either get an empty div or a crash with no helpful output.
 * 
 * ✅ Experiment: Try React.lazy in your current SSR app
 * If you wrap your lazy component inside <Suspense> and try to render it on the server, you'll likely see:
 *    Empty content
 *    Or an error like: Error: A component suspended while rendering, but no fallback UI was specified.
 * 
 * React.lazy()
 * You will likely see:
 *  🔴 A blank screen or
 *  🔴 Console error:
 *      Error: A component suspended while rendering, but no fallback UI was specified.
 * Even though you provided a fallback in <Suspense>, it only works in the browser.
 * 
 * React.lazy uses Suspense, and React’s server-side renderer (renderToString) doesn't support Suspense for data or lazy-loaded components
 */