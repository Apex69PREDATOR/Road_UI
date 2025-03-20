import {React,useEffect,useState} from 'react'
import banner from "../assets/banner.jpeg"
const BigIntro = () => {
  const [know,setKnow]=useState('')
  const [desc,setDesc]=useState('')
  useEffect(()=>{
     let v="Know & Post's about Constructions"
     let s=''
     let i=0
     let x=setInterval(async()=>{
         s+=v[i]
         setKnow(s)
         i++
         if(i>=v.length)
          clearInterval(x)
     },80)

     return ()=>clearInterval(x)

  },[])
  useEffect(()=>{
    let v="Stay informed about essential construction projects with our platform. Users can explore ongoing developments and contribute by adding construction details, ensuring a comprehensive and updated view of infrastructure progress."
    let s=''
    let i=0
    let x=setInterval(async()=>{
        s+=v[i]
        setDesc(s)
        i++
        if(i>=v.length)
         clearInterval(x)
      },30)

     return ()=>clearInterval(x)

  },[])
  return (
    <>
    <header className='bg-blue-600 relative flex flex-wrap gap-[10%] flex-col items-center justify-center md:h-[600px] h-[370px] [&_*:not(h1)]:text-[1.1em] md:[&_*:not(h1)]:text-[2em] text-white'>
      <img src={banner} alt="" className='absolute bg-red-500 h-[100%] w-[100%] z-[1]' />
      <div className="sheet absolute bg-black h-[100%] w-[100%] opacity-30 z-[1]"></div>
      <h1 className='z-[2] text-[2em] md:text-[4em]  font-bold'>Construction's Blog</h1>
      <p className='z-[2]'>{know}</p>
    </header>
    <p className='relative md:left-[30%] text-[0.8em] md:text-[1em] font-semibold my-6 text-center md:w-[40%] w-[100%]'>{desc}</p>
    </>
  )
}

export default BigIntro
