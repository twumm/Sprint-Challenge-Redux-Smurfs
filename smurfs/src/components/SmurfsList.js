import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions'

export function SmurfsList() {
  useEffect(() => {

  })

  return (
    <div>
      
    </div>
  )
}

export default connect(null, { fetchSmurfs })(SmurfsList);
