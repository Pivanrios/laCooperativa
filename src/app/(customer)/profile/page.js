import ClientsHistory from '@/src/components/ClientsHistory/ClientsHistory'
import React from 'react'

//on your profile page you can create and view the status
// of your orders
function ProfilePage() {
  return (
    <section>
        Page starts here------
        list of orders
        <ClientsHistory/>
    </section>
  )
}

export default ProfilePage