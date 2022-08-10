import { combineReducers } from 'redux';
import { reducer as list } from './list';

const reducers = combineReducers({
  list,
});

export default reducers;
