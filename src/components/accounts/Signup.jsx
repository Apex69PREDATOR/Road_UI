import {React,useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import "./signup.css"
const Signup = () => {
  const [submit,submitting]=useState(false)

  const nav=useNavigate()
  const {register,handleSubmit,setError,reset}=useForm()
  const HOST="13.60.43.155"
  const onsubmit=async(data)=>{
    submitting(true)
     const res=await fetch(`http://${HOST}:5000/account/signup`,{method:"POST",headers:{
      "Content-type":'application/json'
     },body:JSON.stringify(data)})
     const r=await res.json()
     alert(r.message)
     r.success && nav('/') && localStorage.setItem('apexConstruction',r.token)
    submitting(false)
  }
  return (
    <div className='relative bg-black flex justify-center items-center w-[101%] h-[100vh] border-2 border-black'>
        <form className='rounded-[10px] flex flex-col justify-evenly items-center md:h-[70%] h-[90%] md:w-[35%] w-[90%] bg-[#1D1D1D] text-[#00e900] [&_*:not(h2,button)]:bg-[#272727] [&_*:not(h2,button)]:rounded [&_*:not(h2,button)]:w-[60%] [&_*:not(h2,button)]:h-[7%] md:[&_*:not(h2)]:text-xl [&_*:not(h2)]:text-l' onSubmit={handleSubmit(onsubmit)}>
          <h2 className='text-3xl'>Sign Up</h2>
        <input type="text"  {...register('fname',{required:true})} placeholder=' First Name' />
        <input type="text" {...register('lname',{required:true})} placeholder=' Last Name' />
        <input type="text" {...register('phoneno',{required:true})} placeholder=' Phone no' />
        <input type="email"  {...register('email',{required:true})} placeholder=' Email'/>
        <input type="password" {...register('password',{required:true})} placeholder=' Password'/>
        <input type="password"  {...register('confirm_password',{required:true})}placeholder=' Retype Passowrd'/>
        <textarea style={{height:"10%"}} {...register('address',{required:true})} placeholder=' Address'/>
        <button className='bg-[#00e900] text-black h-[10%] w-[60%] rounded'>{submit?'Signing Up...':'Sign Up'}</button>
        </form>
    </div>
  )
}

export default Signup
