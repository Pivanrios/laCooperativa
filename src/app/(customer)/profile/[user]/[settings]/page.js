import React from 'react'

//there is 3 types of settings [preferences, passord, allergies]
function SettingsPage({params}) {
  return (
    <>
    {(params.settings === "preferences")? <p>preferences</p>:<p>other</p>}
    </>
  )
}

export default SettingsPage