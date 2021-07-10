import {
  createStore, combineReducers,
} from 'redux';
import reducers from './reducers';

const App = combineReducers(reducers);
const store = createStore(App);
export default store;
