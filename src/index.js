import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";


import configureStore from "./store/configureStore";

import {addBlog, removeBlog, editBlog} from "./actions/blogs"

import { Provider } from 'react-redux'


const store = configureStore()
console.log("store")
console.log(store.getState())
store.subscribe(() => {
  console.log(store.getState());
});

const blog1 = store.dispatch(
  addBlog({id:"1", title: "blog title 1", description: "blog description 1" })
);

const blog2 = store.dispatch(
  addBlog({
    id:"2",
    title: "blog title 2",
    description: "blog description 2",
    dateAdded: Date.now(),
  })
);

store.dispatch(
  addBlog({
    title: "blog title 2",
    description: "blog description 2",
    dateAdded: Date.now(),
  })
);

store.dispatch(
  addBlog({
    title: "blog title 3",
    description: "blog description 3",
    dateAdded: Date.now(),
  })
);

// console.log(blog1.blog.id);

store.dispatch(removeBlog({ id: blog1.blog.id }));
store.dispatch(editBlog(blog2.blog.id , {title: "updated title", description: "updated description"} ));

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

// <AppRouter />

// );

root.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

reportWebVitals();
