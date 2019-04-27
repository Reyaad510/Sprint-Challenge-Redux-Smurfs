import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';




export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
}


export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';


export const deleteFriends = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('call failed: ', err.response);
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response });
    })
}



export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS='ADD_SMURF_SUCCESS';

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });

  return axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err));
}




export const EDIT_SMURF_START = 'EDIT_SMURF_START';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_SMURF_FAILURE = 'EDIT_SMURF_FAILURE';

export const editSmurfs = smurf => dispatch => {
  dispatch({ type: EDIT_SMURF_START });

  return axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data }))
    .catch(err => {
      console.log('call failed: ', err.response);
      dispatch({ type: EDIT_SMURF_FAILURE, payload: err.response });
    })
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
