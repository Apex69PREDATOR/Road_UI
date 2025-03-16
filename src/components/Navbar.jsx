import React from 'react'
import Searchbar from './Searchbar'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
const Navbar = (props) => {
  const nav=useNavigate()

  const log_out=()=>{
     localStorage.removeItem("apexConstruction")
     nav('/login')
  }
  return (
    <nav className='bg-[rgb(232,232,232)] relative text-black p-2 flex items-center sticky top-0 z-[3]'>
      {props.name && <h2 className='absolute left-[2%] text-xl font-mono '>{props.name}</h2>}
      <Searchbar/>
      <ul className='flex w-[40%] justify-center items-center p-5 space-x-[7%]  [&_*]:cursor-pointer [&_*]:text-l hover:[&_*]:text-[#684CE4]'>
        <li >Home</li>
        <li >Road</li>
        <li >Hotels</li>
        <li >Industries</li>
        <li >Institutions</li>
        </ul>    
      {!props.name?<><button onClick={()=>{nav('/signup')}} className='addacount p-3  rounded-[5px] text-white bg-[linear-gradient(120deg,#4287f5,#0c55c9)]  hover:bg-[linear-gradient(120deg,#0c55c9,#4287f5)]'>+ Add Account</button>
       <button onClick={()=>{nav('/login')}} className='login p-3 ml-[8%] rounded-[5px] text-white bg-[linear-gradient(120deg,#4287f5,#0c55c9)]  hover:bg-[linear-gradient(120deg,#0c55c9,#4287f5)]'>Sign In</button> </>:<><button className='hover:scale-125 p-2 text-white transition-transform duration-200 bg-[#427ef5]' onClick={()=>{nav('/addblog')}}>+ Add Construction</button> <button className='p-2 ml-[5%] hover:text-red-900' onClick={log_out}>Log-out <FontAwesomeIcon icon={faRightFromBracket}/> </button></>}
    </nav>
  )
}

export default Navbar
