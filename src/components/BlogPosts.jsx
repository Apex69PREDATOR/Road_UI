import {React,useEffect,useState} from 'react'


const BlogPosts = () => {
  const [blogdata,setBlogdata]=useState([])
  const [message,setMessage]=useState('')
  
  const get_blogs=async()=>{
       const res=await fetch('http://localhost:5000/get-blogs')
       const posts=await res.json()
       setBlogdata(posts.allBlogs)
       setMessage(posts.message)
  }
 useEffect(()=>{
  get_blogs()
 },[])
  return (
    <section className='w-[100%] flex flex-col items-center flex-wrap gap-y-[5vh]'>
      <h2>{message}</h2>
        {blogdata.length?blogdata.map(val=>{
          return <div id={val._id}>
            <img src={val.image_url} alt="construction image" />
           <p> {val.location} by {val.name} </p>
           <span>{val.date.split('T')[0]}</span>
           <span>  at  {val.date.split('T')[1]}</span>
          </div>
        }):<p>No Blogs available</p>}
    </section>
  )
}

export default BlogPosts
