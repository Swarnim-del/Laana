
import thunk from 'redux-thunk'
import  {applyMiddleware, createStore,compose,combineReducers} from 'redux'
import { productListReducer } from './reducers/productReducers';


const initialState={};
const reducer=combineReducers({
    productList:productListReducer,
})
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store= createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;