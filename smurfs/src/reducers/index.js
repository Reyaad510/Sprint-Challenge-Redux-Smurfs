import {
 FETCH_DATA_START,
 FETCH_DATA_SUCCESS,
 ADD_SMURF_START,
 ADD_SMURF_SUCCESS,
 DELETE_SMURF_START,
 DELETE_SMURF_SUCCESS
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

    case DELETE_SMURF_START: 
    return {
      ...state,
      deletingSmurf: true
    }
    
    case DELETE_SMURF_SUCCESS:
    return {
      ...state,
      deletingSmurf: false,
      smurfs: action.payload
    }

    case ADD_SMURF_START:
    return {
      ...state,
      addingSmurf: true
    };

    case ADD_SMURF_SUCCESS:
    return {
      ...state,
      addingSmurf: false,
      error:'',
      smurfs: action.payload
    }
    
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
