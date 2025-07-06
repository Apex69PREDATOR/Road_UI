import React from 'react'
import { Alert,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Division = (props) => {
  const navigate=useNavigate()
  return (
    <div className='division w-[100%] md:h-[15vh] items-center flex flex-col p-[10px] bg-[#dedede] gap-y-[10px]'>
      {props.authDone?<><Alert variant='filled' style={{fontSize:"1em"}}  severity='success' className='flex justify-center w-[80%]'>Start by posting something!</Alert>
      <Button variant='contained' onClick={()=>{navigate( '/addblog')}} className='md:w-[20%] w-[70%]' color='secondary'>Post Something</Button>
      </>:<><Alert variant='filled' style={{fontSize:"1em"}} className='flex justify-center w-[80%]' severity='warning'>To like,comment or post you must sign in </Alert>
      <Button variant='contained' color='primary' onClick={()=>{navigate( '/login')}} className='md:w-[20%] w-[70%]' >Sign In</Button>
      </>}
    </div>
  )
}

export default Division
