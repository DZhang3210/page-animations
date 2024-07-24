import Link from 'next/link'
import React from 'react'
import TransitionLink from './utils/TransitionLink'

const Nav = () => {
  return (
    <div className='w-full h-10 flex gap-10'>
      <TransitionLink
        href =  "/"
      >
        About
      </TransitionLink>
      <TransitionLink
        href = "/Profile"
      >
        Profile
      </TransitionLink>
    </div>
  )
}

export default Nav
