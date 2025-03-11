import {React,useEffect,useState} from 'react'


const BlogPosts = () => {
  const [blogdata,setBlogdata]=useState([])
  
  const get_blogs=async()=>{
       const res=await fetch('http://localhost:5000/get-blogs')
       const posts=await res.json()
       setBlogdata(posts.allBlogs)
  }
 useEffect(()=>{
  get_blogs()
 },[])
  return (
    <section className='w-[100%] flex flex-col items-center flex-wrap gap-y-[5vh]'>
        {blogdata.length?blogdata.map(val=>{
          return <div id={val._id}>
            {val.image} by {val.name}
          </div>
        }):<p>No Blogs available</p>}
    </section>
  )
}

export default BlogPosts
