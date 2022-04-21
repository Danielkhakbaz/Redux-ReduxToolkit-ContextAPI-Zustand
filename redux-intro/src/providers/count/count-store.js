import { createStore } from "redux";
import { Reducers } from "./count-reducers";

export const Store = createStore(Reducers);