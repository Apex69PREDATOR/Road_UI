import React from 'react'
import Navbar from './Navbar'
import BigIntro from './BigIntro'
import BlogTypes from './BlogTypes'
import Division from './Division'
import BlogPosts from './BlogPosts'
import { useEffect,useState } from 'react'
const Home = () => {
  const [name,get_name]=useState(null)
  const [load,loading]=useState(true)
  async function check_login(){
    const token=localStorage.getItem('apexConstruction')
    if(token){

       const res=await fetch("http://localhost:5000/verify/verifyLogin",{method:"POST",headers:
         {
          'Authorization': `Bearer ${token}`
         }
       })
       const r=await res.json()
       console.log(r);
       if(res.ok){
         get_name(r.name)
       }
    }
    loading(false)
  }
  useEffect(()=>{
   check_login()
  },[])

  if(load){
    return <>Loading...</>
  }
  return (
    <>
    <Navbar name={name}/>
    <BigIntro/>
    <main className='w-[100%] flex flex-col flex-wrap gap-y-[10vh] items-center'>
      <BlogTypes/>
      <Division/>
    <BlogPosts/>
    </main>
    </>
  )
}

export default Home
