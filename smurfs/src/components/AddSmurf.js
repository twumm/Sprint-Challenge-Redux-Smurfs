import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

export function AddSmurf({ addSmurf, addingSmurf, updatingSmurf, friendToEdit }) {

  useEffect(() => {
    smurfNameRef.current.value = friendToEdit.name ? friendToEdit.name : null;
    smurfAgeRef.current.value = friendToEdit.age ? friendToEdit.age : null;
    smurfHeightRef.current.value = friendToEdit.height ? friendToEdit.height : null;
  })

  let smurfNameRef = React.createRef();
  let smurfAgeRef = React.createRef();
  let smurfHeightRef = React.createRef();

  const onAddSmurf = (event) => {
    event.preventDefault();

    const smurf = {
      name: smurfNameRef.current.value,
      age: smurfAgeRef.current.value,
      height: smurfHeightRef.current.value,
    }

    addSmurf(smurf);
    smurfNameRef.current.value = '';
    smurfAgeRef.current.value = '';
    smurfHeightRef.current.value = '';
  }

  return (
    <div>
      <form
        onSubmit={(event) => onAddSmurf(event)}
      >
        <input
          type="text"
          placeholder="Enter name"
          ref={smurfNameRef}
        />
        <input
          type="number"
          placeholder="Enter a huge age"
          ref={smurfAgeRef}
        />
        <input
          type="number"
          placeholder="How tall is this smurf?"
          ref={smurfHeightRef}
        />
        <input
          type="submit"
        />
      </form>
      { addingSmurf && <p>Adding 1 smurf</p> }
      { updatingSmurf && <p>Updating 1 smurf</p> }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    friendToEdit: state.friendToEdit,
  }
}

export default connect(mapStateToProps, { addSmurf })(AddSmurf)
