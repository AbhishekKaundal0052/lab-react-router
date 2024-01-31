import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <>

    <nav className='nav'>
        <Link className='text'to='./Home' >Home</Link>
      
        <div >
        <Link className='text' to='./Contacts'>Contacts</Link>
        <Link className='text' to='./About'>About</Link>
        </div>
    </nav>
    </>
  )
}
