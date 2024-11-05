import Navbar from '@/components/components/Navbar'
import NavbarIn from '@/components/components/NavbarIn'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
       <NavbarIn/>
      {children}</div>
  )
}

export default layout