import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions'
import Smurf from './Smurf';

export function SmurfsList(props) {
  const { fetchSmurfs, smurfs } = props;

  useEffect(() => {
    fetchSmurfs();
  }, fetchSmurfs)

  return (
    <div>
      {
        smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
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

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);
