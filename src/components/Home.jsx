import React from 'react'
import Navbar from './Navbar'
import BigIntro from './BigIntro'
import BlogTypes from './BlogTypes'
import Division from './Division'
import BlogPosts from './BlogPosts'
import { useEffect,useState } from 'react'
const Home = () => {
  const [name,get_name]=useState(null)
  const [uid,get_uid]=useState(null)
  const [load,loading]=useState(true)
  const [type,setType]=useState(null)
  const [authDone,setAuthDone]=useState(false)
  const HOST="13.60.104.47"
  async function check_login(){
    const token=localStorage.getItem('apexConstruction')
    if(token){

       const res=await fetch(`http://${HOST}:5000/verify/verifyLogin`,{method:"POST",headers:
         {
          'Authorization': `Bearer ${token}`
         }
       })
       const r=await res.json()
       if(res.ok){
         get_name(r.name)
         get_uid(r.id)
         setAuthDone(true)
       }
    }
    loading(false)
  }
  useEffect(()=>{
  !authDone && check_login()
  },[])

  if(load){
    return <>Loading...</>
  }
  return (
    <>
    <Navbar name={name} setType={setType}/>
    <BigIntro/>
    <main className='w-[100%] flex flex-col bg-[#fcfcfa] flex-wrap gap-y-[10vh] items-center'>
      <BlogTypes setType={setType}/>
      <Division authDone={authDone} />
    <BlogPosts uid={uid} type={type} name={name}/>
    </main>
    </>
  )
}

export default Home
