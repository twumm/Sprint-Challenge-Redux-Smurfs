import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchSmurfs, removeSmurf } from '../actions'
import Smurf from './Smurf';

export function SmurfsList(props) {
  const { fetchSmurfs, removeSmurf, smurfs, fetchingSmurfs, deletingSmurfs } = props;

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
          />
        ))
      }
      {fetchingSmurfs && <p>Happy smurfs on the way!</p>}
      {deletingSmurfs && <p>Deleting smurf</p>}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    deletingSmurfs: state.deletingSmurfs,
  }
}

export default connect(mapStateToProps, { fetchSmurfs, removeSmurf })(SmurfsList);
