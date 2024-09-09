import Allergies from '@/src/components/Profile/Navigation/Settings/Allergies'
import Preferences from '@/src/components/Profile/Navigation/Settings/Preferences'
import React from 'react'

//there is 3 types of settings [preferences, passord, allergies]
function SettingsPage({params}) {
  return (
    <>
    {(params.settings === "preferences")? <Preferences/>:<Allergies/>}
    </>
  )
}

export default SettingsPage