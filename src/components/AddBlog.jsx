import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
const AddBlog = () => {
  const nav=useNavigate()

  const {register,handleSubmit,setError,reset}=useForm()

  return (
    <div className='relative  flex justify-center items-center w-[101%] h-[100vh] border-2 border-black'>
        <form className='rounded-[10px] flex flex-col justify-evenly items-center h-[80%] w-[60%] bg-[#1D1D1D] text-[#00e900] [&_*:not(h2,button)]:bg-[#272727] [&_*:not(h2,button)]:rounded [&_*:not(h2,button)]:w-[60%] [&_*:not(h2,button)]:h-[7%] [&_*:not(h2,button)]:text-xl'>
          <h2 className='text-3xl'>Sign Up</h2>
       
        <input type="text" {...register('location',{required:true})} placeholder='Location of construction'/>
        
        <select {...register('type',{required:true})}>
            <option value="">Select Construction Type</option>
            <option value="Road">Road</option>
            <option value="Hotels">Hotels</option>
            <option value="Industries">Industries</option>
            <option value="Institutions">Institutions</option>

            </select>

            <input type="file"  {...register('file',{required:true})} placeholder='+ construction photo' />
        
        <textarea style={{height:"10%"}} {...register('description',{required:true})} placeholder='Description of the construction'/>
        <button className='bg-[#00e900] text-black h-[10%] w-[60%] rounded'>Sign Up</button>
        </form>
    </div>
  )
}

export default AddBlog
