import {React,useState} from 'react'
import Searchbar from './Searchbar'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket,faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = (props) => {
  const nav=useNavigate()
  const [shownav,toggleNav]=useState(false)
  const log_out=()=>{
     localStorage.removeItem("apexConstruction")
     nav('/login')
  }
  const updateType=(type)=>{
    props.setType(type)
    location.href="#allblogs"
  }
  return (
    <nav className='bg-[rgb(232,232,232)] relative text-black p-2 flex items-center justify-evenly sm:justify-start sticky top-0 z-[3]'>
      {props.name && <h2 className='absolute hidden sm:block left-[2%] text-xl font-mono '>{props.name}</h2>}
      <FontAwesomeIcon onClick={()=>{shownav?toggleNav(false):toggleNav(true)}} className='sm:hidden text-xl' icon={faBars}/>
      <Searchbar name={props.name}/>
      <ul className={`sm:flex ${!shownav?'hidden':'flex flex-col top-[100%] backdrop-blur-md bg-white/30 left-0 h-[25vh] '} absolute sm:static  sm:w-[40%] w-[25%] sm:justify-center justify-between items-center p-5 sm:space-x-[7%] [&_*]:cursor-pointer [&_*]:text-l hover:[&_*]:text-[#684CE4]`}>
        <li  onClick={()=>{updateType(null)}} >Home</li>
        <li onClick={()=>{updateType('Road')}}>Road</li>
        <li onClick={()=>{updateType('Hotels')}}>Hotels</li>
        <li onClick={()=>{updateType('Industries')}}>Industries</li>
        <li onClick={()=>{updateType('Institutions')}}>Institutions</li>
        </ul>    
      {!props.name?<><button onClick={()=>{nav('/signup')}} className='addacount sm:p-3 p-2  rounded-[5px] text-white bg-[linear-gradient(120deg,#4287f5,#0c55c9)]  hover:bg-[linear-gradient(120deg,#0c55c9,#4287f5)] sm:text-[1em] text-[0.8em]'>+ Add Account</button>
       <button onClick={()=>{nav('/login')}} className='login sm:p-3 p-2 sm:ml-[8%] rounded-[5px] text-white bg-[linear-gradient(120deg,#4287f5,#0c55c9)]  hover:bg-[linear-gradient(120deg,#0c55c9,#4287f5)] sm:text-[1em] text-[0.8em]'>Sign In</button> </>:<><button className='hover:scale-125 p-2 text-[0.8em] sm:text-[1em] text-white transition-transform duration-200 bg-[#427ef5]' onClick={()=>{nav('/addblog')}}>+ Add Construction</button> <button className='p-2 sm:ml-[5%] hover:text-red-900 sm:text-[1em] text-[0.8em]' onClick={log_out}>Log-out <FontAwesomeIcon icon={faRightFromBracket}/> </button></>}
    </nav>
  )
}

export default Navbar
