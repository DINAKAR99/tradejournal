import React from "react";
import { combineReducers, legacy_createStore } from "redux";
import reducer1 from "./reducers/Reducer1";

const redukers = combineReducers({ journalEngine: reducer1 });
const Store = legacy_createStore(redukers);

export default Store;
