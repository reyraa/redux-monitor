import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import middleWares from './middlewares';
import reducers from './reducers';

const App = combineReducers(reducers);
const store = createStore(App, compose(applyMiddleware(...middleWares)));
export default store;
