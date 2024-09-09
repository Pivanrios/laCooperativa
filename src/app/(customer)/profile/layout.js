import Navigation from '@/src/components/Profile/Navigation/Navigation'
import Profile from '@/src/components/Profile/Profile'
import React from 'react'
//the layout should be a list of links that let you personalize
//or edit your data

function ProfileLayout({children}) {
  return (
    <div>
        <Navigation/>
        <div className='h-full w-full'>
        {children}
        </div>
    </div>
  )
}

export default ProfileLayout