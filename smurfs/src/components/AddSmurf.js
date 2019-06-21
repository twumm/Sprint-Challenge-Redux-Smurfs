import React from 'react'

export default function AddSmurf() {
  const smurfNameRef = React.createRef();
  const smurfAgeRef = React.createRef();
  const smurfHeightRef = React.createRef();

  return (
    <div>
      <form>
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
    </div>
  )
}
