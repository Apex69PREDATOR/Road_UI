import React from 'react'
import Navbar from './Navbar'
import BigIntro from './BigIntro'
import BlogTypes from './BlogTypes'
import Division from './Division'
import BlogPosts from './BlogPosts'
const Home = () => {
  return (
    <>
    <Navbar/>
    <BigIntro/>
    <main className='w-[100%] flex flex-col flex-wrap gap-y-[10vh] items-center'>
      <BlogTypes/>
      <Division/>
    </main>
    <BlogPosts/>
    </>
  )
}

export default Home
