import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Searchbar = () => {
  return (
    <>
    <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute opacity-40 text-black left-[35%] top-[35%] sm:left-[23%] sm:top-[42%]' />
    <input type="text" className='bg-transparent border-b-2 border-black sm:ml-[15%] sm:mr-[4%]  h-10 w-[25%] sm:w-[10%] text-black text-[1.1rem]' placeholder=' Search....'  />
    </> 
  )
}

export default Searchbar
