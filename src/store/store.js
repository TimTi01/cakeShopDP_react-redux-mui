import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {dataReducer} from "./dataReducer";
import {basketReducer} from "./basketReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {avatarReducer} from "./avatarReducer";
import {loginDataReducer} from "./loginDataReducer";
import {favoritesReducer} from "./favoritesReducer";

const rootReducer = combineReducers({
    dataReducer,
    basketReducer,
    favoritesReducer,
    avatarReducer,
    loginDataReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export const addData = (payload) => ({type: "ADD_DATA", payload})

export const addToCart = (payload) => ({type: "ADD_TO_CART", payload})
export const delFromCart = (payload) => ({type: "DEL_FROM_CART", payload})
export const addToFavorites = (payload) => ({type: "ADD_TO_FAVORITES", payload})
export const delFromFavorites = (payload) => ({type: "DEL_FROM_FAVORITES", payload})
export const getAvatarStatus = (payload) => ({type: "GET_AVATAR_STATUS", payload})
export const getLoginData = (payload) => ({type: "GET_LOGIN_DATA", payload})