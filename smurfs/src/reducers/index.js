import {
 FETCH_DATA_START,
 FETCH_DATA_SUCCESS
} from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {

    case FETCH_DATA_START:
    return {
      ...state,
      error:'',
      fetchingSmurfs: true
    };

    case FETCH_DATA_SUCCESS:
    return {
      ...state,
      error:'',
      fetchingSmurfs: false,
      smurfs: action.payload
    };
    
    default:
    return state;
  }
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
