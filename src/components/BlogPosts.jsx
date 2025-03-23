import {React,useEffect,useState,useRef} from 'react'
import "./blogposts.css"
const BlogPosts = (props) => {
  const [blogdata,setBlogdata]=useState([])
  const [message,setMessage]=useState('')
  const [liked,setLiked]=useState({})
  const [likedarr,setLikedarr]=useState([])
  const [commentarr,setCommentarr]=useState({})
  const [comment,showComment]=useState({})

  const month={'01':"Jan",'02':"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"aug","09":"sep","010":"Oct","011":"Nov","012":"Dec"}
  
  const HOST="3.110.46.34"
  const cmtbox=useRef()
  
  const get_blogs=async()=>{
       const res=await fetch(`http://${HOST}:5000/get-blogs`,{method:"POST",headers:{
        "Content-type":'application/json',
        "blogtype":props.type
       }})
       const posts=await res.json()
       setBlogdata(posts.allBlogs)
       setMessage(posts.message)
       const likesData={}
       const cmtobj={}
       posts.allBlogs.forEach(val=>{
        likesData[val._id]=val.likes
        cmtobj[val._id] =false
        if(val.likedBy.includes(props.uid)){
           likedarr.push(val._id)   
        }
        commentarr[val._id]=val.CommentedBy
       })

       setLiked(prevLikes=>({...prevLikes,...likesData}))
       showComment(cmtobj)
  }
  
  const update_like=async (id)=>{
   
    if(likedarr.includes(id))
      return
    if(!localStorage.getItem("apexConstruction")){
      alert('You must sign in to like!')
      return
    }
    

    const likesData={}
    likesData[id]=liked[id]+1
    setLiked(prevLikes=>({...prevLikes,...likesData}))
    
    const res=await fetch(`http://${HOST}:5000/like/giveLike`,{method:"POST",headers:{
      "Content-type":'application/json'
    },body:JSON.stringify({uid:props.uid,bid:id})})

    const r=await res.json()
    if(res.ok){
        setLikedarr([...likedarr,id])
    }

  }
  async function give_comment(value,id){
    if(props.uid && localStorage.getItem("apexConstruction")){
    console.log(cmtbox.current.value);
    cmtbox.current.value=''
    cmtbox.current.blur()
    const res=await fetch(`http://${HOST}:5000/like/giveLike`,{method:"POST",headers:{
      "Content-type":'application/json'
    },body:JSON.stringify({uid:props.uid,bid:id,comment:value,name:props.name})})
    const r=await res.json()
    console.log(r);
    
    }
    alert('Please sign in again to comment')
  }
 useEffect(()=>{
  get_blogs()
 },[props.type])
  return (
    <section id="allblogs" className='w-[100%] flex flex-col items-center flex-wrap gap-y-[5vh]'>
      <h2 className='text-3xl text-blue'>{message}</h2>
        {blogdata.length?blogdata.map(val=>{
          
          return <><div  className='blog-card bg-white relative flex flex-col justify-between [&_*:not(img,b,span,i)]:ml-[5%] rounded border-black w-[95%] h-[70vh] md:h-[97vh] md:w-[59%]' id={val._id}>
            <img src={val.image_url} className='h-[60%] md:h-[66%] w-[100%]' alt="construction image" />
           <p className='blog-usrname'> <span className='font-semibold font-sans'> {val.name}</span> <br /> {month[val.date.split('T')[0].split('-')[1]]} {val.date.split('T')[0].split('-')[2]}, {val.date.split('T')[0].split('-')[0]} <span className='text-[0.3em]'>●</span> <span className='p-[0.7%] md:p-1 rounded bg-[rgb(66,68,67)] text-white'>{val.timePassed.year>0 && val.timePassed.year +' years'  } {val.timePassed.month>0 && val.timePassed.month +' months'} {val.timePassed.day>0 && val.timePassed.day +' d'} {val.timePassed.hour>0 && val.timePassed.hour +' hr'} {val.timePassed.min>0 && val.timePassed.min +' min'} {(val.timePassed.year==0 && val.timePassed.month==0 && val.timePassed.day==0 && val.timePassed.hour==0 && val.timePassed.min==0)?'just now':'ago'}</span></p>
           <p className='text-[1.15em] md:text-[1.5em] font-semibold b-heading'>{val.location} <br />
           <span className='text-[0.7em]'>Pin : {val.pin}</span> <br /> 
           <span className='text-[0.7em] font-normal' ><span className='text-white bg-blue-800 rounded p-[0.7%] md:p-1 font-mono'>Type</span> - <span className='p-[0.7%] md:p-1 font-sans rounded bg-red-800 text-white'> {val.type}</span></span>
            </p>
           <p>{val.description}</p>
           <div className="likes flex justify-around items-center border-t-[1.2px] border-black h-[6%] w-[90%]">
    <p><i onClick={()=>{showComment(prev=>({...prev,[val._id]:!comment[val._id]}))}} className='fa-regular fa-comment text-2xl cursor-pointer hover:scale-125 transition-transform duration-200'></i>
           <span className='p-2'>{commentarr[val._id]?commentarr[val._id].length:0}</span></p>
            <p><span className='p-2'>{liked[val._id]}</span>
           <i onClick={(e)=>{update_like(e.target.parentElement.parentElement.parentElement.id)}} className={`fa-${likedarr.includes(val._id)?'solid':'regular'} fa-heart text-2xl cursor-pointer hover:scale-125 transition-transform duration-200 text-red-500`} ></i></p>
           </div>
          
          </div>
          {
            comment[val._id] && <div className='comment flex flex-col justify-center items-center flex-wrap gap-[5%] relative bg-white rounded h-[30vh] w-[90%] md:w-[60%]'>{commentarr[val._id]?commentarr[val._id].map(val=>{
              return <div id={val.uid} className='flex flex-col h-[20%]'><p>{val.name}</p><p>{val.comment}</p></div>
            }):<p style={{opacity:"0.5"}}>No comments till now</p>} <input className='absolute w-[70%] border-b-2 border-[rgb(0,0,0,0.6)] bottom-[2%]' ref={cmtbox} type="text" onKeyPress={(e)=>{e.key=='Enter' && give_comment(e.target.value,e.target.parentElement.parentElement.id)}} placeholder='Comment something..' /> </div>
           }
          </>
        }):<p>No Blogs available</p>}
    </section>
  )
}

export default BlogPosts
