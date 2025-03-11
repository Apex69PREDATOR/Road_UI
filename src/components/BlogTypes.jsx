import React from 'react'
import "./BlogTypes.css"
import road from "../assets/Road.jpeg"
import hotel from "../assets/Hotel.jpeg"
import industry from "../assets/Industry.jpeg"
const BlogTypes = () => {
  return (
    <div className='w-[69%] h-[35vh] flex justify-between [&_*:not(button)]:h-[100%] [&_*:not(img,button)]:w-[33%] [&_*:not(img)]:relative [&_*:not(img)]:flex [&_*:not(img)]:justify-center [&_*:not(img)]:items-center' >
      <div className="typeimg">
        <img src={road} className='absolute bg-red-200  w-[100%]' alt="" />
        <button>Road</button>
      </div>
      <div className="typeimg">
      <img src={hotel} className='absolute bg-red-200  w-[100%]' alt="" />
      <button>Hotels</button>

      </div>
      <div className="typeimg">
      <img src={industry} className='absolute bg-red-200  w-[100%]' alt="" />
      <button>Industries</button>
      </div>
    </div>
  )
}

export default BlogTypes
