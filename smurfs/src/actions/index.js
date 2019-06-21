import axios from 'axios';

const smurfsApiURL = 'http://localhost:3333/smurfs';

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const FAILURE = 'FAILURE';
export const SET_SMURF_TO_EDIT = 'SET_SMURF_TO_EDIT';

export const getSmurfs = (smurfs) => {
  return {
    type: GET_SMURFS,
    payload: smurfs,
  }
}

export const genericAction = (type, payload) => {
  return {
    type,
    payload
  }
}

export const fetchSmurfs = () => dispatch => {
  dispatch(genericAction(FETCHING_SMURFS, true));
  axios.get(smurfsApiURL)
    .then(response => dispatch(getSmurfs(response.data)))
    .catch(error => dispatch(genericAction(FAILURE, error)))
    .finally(() => dispatch(genericAction(FETCHING_SMURFS, false)))
}

export const addSmurf = (smurf) => dispatch => {
  dispatch(genericAction(ADDING_SMURF, true));
  const { name, age, height } = smurf;
  axios.post(smurfsApiURL, { name, age, height })
    .then(response => dispatch(getSmurfs(response.data)))
    .catch(error => dispatch(genericAction(FAILURE, error)))
    .finally(() => dispatch(genericAction(ADDING_SMURF, false)))
}

export const removeSmurf = id => dispatch => {
  dispatch(genericAction(DELETING_SMURF, true));
  axios.delete(`${smurfsApiURL}/${id}`)
    .then(response => dispatch(getSmurfs(response.data)))
    .catch(error => dispatch(genericAction(FAILURE, error)))
    .finally(() => dispatch(genericAction(DELETING_SMURF, false)))
}

export const updateSmurf = (id, smurf) => dispatch => {
  debugger;
  dispatch(genericAction(UPDATING_SMURF, true));
  const { name, age, height } = smurf;
  axios.put(`${smurfsApiURL}/${id}`, { name, age, height })
    .then(response => dispatch(getSmurfs(response.data)))
    .catch(error => dispatch(genericAction(FAILURE, error)))
    .finally(() => {
      dispatch(genericAction(UPDATING_SMURF, false));
      dispatch(genericAction(SET_SMURF_TO_EDIT, {}));
    })
}

export const setSmurfToEdit = smurf => dispatch => {
  dispatch(genericAction(SET_SMURF_TO_EDIT, smurf))
}



/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
