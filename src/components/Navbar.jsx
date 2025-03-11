import React from 'react'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <nav className='bg-[rgb(232,232,232)] text-black p-2 flex items-center sticky top-0 z-[3]'>
      <Searchbar/>
      <ul className='flex w-[40%] justify-center items-center p-5 space-x-[8%]  [&_*]:cursor-pointer [&_*]:text-l hover:[&_*]:text-[#684CE4]'>
        <li >Home</li>
        <li >Road</li>
        <li >Hotels</li>
        <li >Industries</li>
        <li >Institutions</li>
        </ul>    
    </nav>
  )
}

export default Navbar
