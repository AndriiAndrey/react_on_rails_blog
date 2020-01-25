import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
import postReducer from "./post-reducer";

const reducers = combineReducers({
app: appReducer,
postPages: postReducer,
form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;