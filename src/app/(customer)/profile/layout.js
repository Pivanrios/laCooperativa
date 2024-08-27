import Profile from '@/src/components/Profile/Profile'
import React from 'react'
//the layout should be a list of links that let you personalize
//or edit your data

function ProfileLayout({children}) {
  return (
    <div>
        <nav>
        
        </nav>
        {children}
    </div>
  )
}

export default ProfileLayout