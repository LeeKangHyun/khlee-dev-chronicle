import { combineReducers } from 'redux';
//리듀서를 Import
import { counter, extra } from './addno/reducer';

const rootReducer = combineReducers({
  /*
    필요한 리듀서들을 여기에
  */
  counter,
  extra
});

export default rootReducer;
