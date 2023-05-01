import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/UserReducers'
import { noteCreateReducer, noteUpdateReducer, notesListReducer } from './reducers/NotesReducer'
const reducer=combineReducers({
    // this will contain all reducers 
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    noteList:notesListReducer,
    noteCreate:noteCreateReducer,
    noteUpdate:noteUpdateReducer
})
const userInfoFromStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const initialState={
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware=[thunk]
const store=createStore(
    reducer,initialState,composeWithDevTools(applyMiddleware(...middleware))
);
export default store
