import post from "./reducers/posts";
import comments from "./reducers/comments";

import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
  post,
  comments
});

const store = createStore(reducer);

export default store;
