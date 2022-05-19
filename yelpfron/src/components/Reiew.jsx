import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Reiew() {
  const [name,setname]=useState("")
  const [comm,setcomm]=useState("")
  const [rating,setrating]=useState("")
  const {id,na}=useParams();
const [data,setdata]=useState([])
  async function getdata(){
    const result = await fetch(`http://localhost:8080/rew/${id}`)
    const data =await result.json()
    setdata(data);
  }
  async function postid(e){
    e.preventDefault();
    try{
    const body= {comm,name,rating};
    const result=await fetch(`http://localhost:8080/rew/${id}`,{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(body)

    })
  }catch(e){
    console.log(e)
  }
    
  }
  console.log(data)
  useEffect(() => {
    getdata();
  }, [])
  return (
    <div className='container'>
        <h1>
       {na}

        </h1>
        <div className='type'>

        {data.map(d=>
 <div class="card text-white bg-primary mb-3 own" styles={{maxWidth:"18rem"}}>
 <div class="card-header">{d.name}</div>
 <div class="card-body">
   {/* <h5 class="card-title">Primary card title</h5> */}
   <p class="card-text">{d.comment}</p>
   <hr />
   <p class="card-text">Rating : {d.rating}</p>
 </div>
       </div>
          )}
          </div>
       
        <form onSubmit={postid}>
            <label >Name</label>
          
            <input type="text" class="form-control" value={name} onChange={(e)=>setname(e.target.value)} />
            <label>Comment</label>
            <input type="text" value={comm} class="form-control" onChange={(e)=>setcomm(e.target.value)}/>
            <label >Rating</label>
            <input type="number" value={rating} class="form-control" onChange={(e)=>setrating(e.target.value)} />
           <br />
            <button class="btn btn-primary">Submit</button>
            
                   </form>
        </div>
  )
}

export default Reiew