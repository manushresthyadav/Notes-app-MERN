import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducers/UserReducers'
import { noteCreateReducer, noteDeleteReducer, noteUpdateReducer, notesListReducer } from './reducers/NotesReducer'
const reducer=combineReducers({
    // this will contain all reducers 
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userUpdate:userUpdateReducer,
    noteList:notesListReducer,
    noteCreate:noteCreateReducer,
    noteUpdate:noteUpdateReducer,
    noteDelete:noteDeleteReducer,
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
