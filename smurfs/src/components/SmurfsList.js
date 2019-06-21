import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchSmurfs, removeSmurf } from '../actions'
import Smurf from './Smurf';

export function SmurfsList(props) {
  const { fetchSmurfs, removeSmurf, smurfs } = props;

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
    </div>
  )
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurfs, removeSmurf })(SmurfsList);
