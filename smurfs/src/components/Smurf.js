import React from 'react'

export default function Smurf({ smurf, removeSmurf }) {
  const onRemoveSmurf = () => {
    removeSmurf(smurf.id)
  }

  return (
    <div>
      <h4>{smurf.name}</h4>
      <p>{smurf.age}</p>
      <h4>{smurf.height}</h4>
      <button onClick={() => onRemoveSmurf()}>Delete</button>
    </div>
  )
}
