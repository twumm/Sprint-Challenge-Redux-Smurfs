import * as types from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

export default function smurfsReducer(state = initialState, action) {
  switch(action.type) {
    case (types.GET_SMURFS):
      return {
        ...state,
        smurfs: action.payload,
      }

    case (types.ADD_SMURF):
      return {
        ...state,
        smurfs: [ ...state.smurfs, action.payload ],
      }
    
    case (types.FETCHING_SMURFS):
      return {
        ...state,
        fetchingSmurfs: action.payload
      }

    case (types.ADDING_SMURF):
      return {
        ...state,
        addingSmurf: action.payload
      }

    case (types.UPDATING_SMURF):
      return {
        ...state,
        updatingSmurf: action.payload
      }

    case (types.DELETING_SMURF):
      return {
        ...state,
        deletingSmurf: action.payload
      }

    case (types.FAILURE):
      return {
        ...state,
        error: action.payload
      }
    
    default:
      return state;
  }
}

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
