import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchSmurfs, removeSmurf, setSmurfToEdit } from '../actions'
import Smurf from './Smurf';

export function SmurfsList({ fetchSmurfs, removeSmurf, smurfs, fetchingSmurfs, deletingSmurfs, setSmurfToEdit, error }) {

  useEffect(() => {
    fetchSmurfs();
  }, fetchSmurfs)

  return (
    <div>
      {
        smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            smurf={smurf}
            removeSmurf={removeSmurf}
            setSmurfToEdit={setSmurfToEdit}
          />
        ))
      }
      {fetchingSmurfs && <p>Happy smurfs on the way!</p>}
      {deletingSmurfs && <p>Deleting smurf</p>}
      {error && <p>Deleting smurf</p>}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    deletingSmurfs: state.deletingSmurfs,
    error: state.error,
  }
}

export default connect(mapStateToProps, { fetchSmurfs, removeSmurf, setSmurfToEdit })(SmurfsList);
