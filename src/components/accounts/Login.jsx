import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import "./signup.css"
const Login = () => {
  const nav=useNavigate()
  const {register,handleSubmit,setError,reset}=useForm()
  const onsubmit=async(data)=>{
     const res=await fetch('http://3.110.46.34:5000/authenticate/login',{method:"POST",headers:{
      "Content-type":'application/json'
     },body:JSON.stringify(data)})
     const r=await res.json()
     alert(r.message)
     r.success && nav('/') && localStorage.setItem('apexConstruction',r.token)
  }
  return (
    <div className='relative bg-black flex justify-center items-center w-[101%] h-[100vh] border-2 border-black'>
        <form className='rounded-[10px] flex flex-col justify-evenly items-center md:h-[65%] h-[85%] md:w-[35%] w-[85%] bg-[#1D1D1D] text-[#00e900] [&_*:not(h2,button)]:bg-[#272727] [&_*:not(h2,button)]:rounded [&_*:not(h2,button)]:w-[60%] [&_*:not(h2,button)]:h-[10%] [&_*:not(h2,button)]:text-l md:[&_*:not(h2,button)]:text-xl' onSubmit={handleSubmit(onsubmit)}>
          <h2 className='text-3xl'>Sign In</h2>
        
        <input type="text" {...register('uniqueid',{required:true})} placeholder='Email id or Phone no' />
        <input type="password" {...register('password',{required:true})} placeholder=' Password'/>
        <button className='bg-[#00e900]  text-black h-[10%] w-[60%] rounded'>Sign In</button>
        </form>
    </div>
  )
}

export default Login
