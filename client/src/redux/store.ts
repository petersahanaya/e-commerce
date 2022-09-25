import { legacy_createStore, combineReducers, compose , applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
    products :productReducer
})

const store = legacy_createStore(reducer, compose(applyMiddleware(thunk)));

export default store

