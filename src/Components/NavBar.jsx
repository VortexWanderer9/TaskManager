import React from 'react'
import { NavLink } from 'react-router'

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-b-2xl p-3 h-20 bg-gray-700">
       <div className='font-bold flex justify-between  text-2xl p-2'>
       <div>
         <NavLink to={'/'} className={'hover:text-red-500 ease-in-out duration-300 text-amber-800'}>TaskM</NavLink>
       </div>
       <div className='flex items-center gap-4'>
       <NavLink to={'/about'}>About</NavLink>
       <NavLink to={'/learn'}>Learn</NavLink>
       <NavLink to={'/Updates'}>Update</NavLink>
       </div>
       </div>
      </nav>
    </>
  )
}
