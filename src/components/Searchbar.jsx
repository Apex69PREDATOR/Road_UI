import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Searchbar = () => {
  return (
    <>
    <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute opacity-40 text-black' style={{left:"20.5%",top:"42%"}}/>
    <input type="text" className='bg-transparent border-b-2 border-black mx-[12%] h-10 w-[10%] text-black text-[1.3rem]' placeholder=' Search....'  />
    </> 
  )
}

export default Searchbar
