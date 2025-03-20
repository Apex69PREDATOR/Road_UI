import React from 'react'
import "./BlogTypes.css"
import road from "../assets/Road.jpeg"
import hotel from "../assets/Hotel.jpeg"
import industry from "../assets/Industry.jpeg"
const BlogTypes = (props) => {
  return (
    <div className='md:w-[69%] w-[100%] md:h-[35vh] h-[20vh] flex justify-between [&_*:not(button)]:h-[100%] [&_*:not(img,button)]:w-[33%] [&_*:not(img)]:relative [&_*:not(img)]:flex [&_*:not(img)]:justify-center [&_*:not(img)]:items-center' >
      <div className="typeimg">
        <img src={road} className='absolute  w-[100%]' alt="" />
        <button onClick={()=>{props.setType('Road')}}>Road</button>
      </div>
      <div className="typeimg">
      <img src={hotel} className='absolute w-[100%]' alt="" />
      <button onClick={()=>{props.setType('Hotels')}}>Hotels</button>

      </div>
      <div className="typeimg">
      <img src={industry} className='absolute  w-[100%]' alt="" />
      <button onClick={()=>{props.setType('Industries')}}>Industries</button>
      </div>
    </div>
  )
}

export default BlogTypes
