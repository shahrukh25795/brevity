
import { combineReducers } from 'redux';

import Persons from '../Reducers/Persons/person';

const reducers = combineReducers({
    Persons: Persons
});

export default reducers;