import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices/carSlice";

const rootReducer = combineReducers({
    carReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}
