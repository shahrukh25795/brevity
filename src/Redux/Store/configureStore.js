import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../Reducers/index';

export default createStore(Reducers, applyMiddleware(thunk))