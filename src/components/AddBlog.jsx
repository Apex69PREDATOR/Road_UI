import {React,useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
const AddBlog = () => {
  const nav=useNavigate()
  const [total,updateTotal]=useState(0)
  const [submitting,isSubmitting]=useState(false)
  const {register,handleSubmit,setError,reset}=useForm()
  const HOST="13.60.104.47"
   const onsubmit=async (data)=>{
    isSubmitting(true)
    if(total>150){
      alert("must not exceed 150 words")
      return
    }
    const token=localStorage.getItem("apexConstruction")
    const formData= new FormData();
    formData.append('location',data.location)
    formData.append('type',data.type)
    formData.append('description',data.description)
    formData.append('img_construction',data.img_construction[0])
    formData.append('pin',data.pin)
    
      const res=await fetch(`${import.meta.env.VITE_SERVER_URL}/post/addBlog`,{method:"POST",headers:{
        
          'Authorization': `Bearer ${token}`
         
      },body:formData})
      const r=await res.json()
      alert(r.message)
      isSubmitting(false)
      if(res.ok)
        nav('/')
      
      
   }

  return (
    <div className='relative   flex justify-center items-center w-[101%] h-[100vh] bg-[#161716]'>
        <form className='rounded-[10px] flex flex-col justify-evenly items-center md:h-[80%] h-[85%] md:w-[60%] w-[85%] bg-[#1D1D1D] text-[#00e900] [&_*:not(h2,button,label,p)]:bg-[#272727] [&_*:not(h2,button,label)]:rounded [&_*:not(h2,button)]:w-[60%] [&_*:not(h2,button,label,p)]:h-[7%] md:[&_*:not(h2,p)]:text-xl [&_*:not(h2,p)]:text-l' onSubmit={handleSubmit(onsubmit)}>
          <h2 className='text-3xl'>Add Constructions</h2>
       
        <input type="text" {...register('location',{required:true})} placeholder=' Location of construction'/>
        <input type="number" {...register('pin',{required:true})} placeholder=' Pin code'/>
        
        <select className='text-[rgb(235,233,232,0.7)]' {...register('type',{required:true})}>
            <option value="">Select Construction Type</option>
            <option value="Road">Road</option>
            <option value="Hotels">Hotels</option>
            <option value="Industries">Industries</option>
            <option value="Institutions">Institutions</option>

            </select>
            <label className='text-[rgb(235,233,232)]' htmlFor="img_construction">Add Construction image 👇</label>
            <input type="file" id='img_construction' className='text-[rgb(235,233,232,0.7)]'  {...register('img_construction',{required:true})} />
        
        <textarea onKeyDown={(e)=>{updateTotal(e.target.value.length)}}  style={{height:"10%"}} {...register('description',{required:true})} placeholder=' Description of the construction'/>
        <p className={`text-end ${total>150?'text-[#ed4253]':'text-[#00e900]'}`}>total characters : ({total}/150)</p>
        <button className='bg-[#00e900] text-black h-[10%] w-[60%] rounded'>{submitting?'Posting...':'POST'}</button>
        </form>
    </div>
  )
}

export default AddBlog
