import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Reiew() {
  const {id}=useParams();
const [data,setdata]=useState([])
  async function getdata(){
    const result = await fetch(`http://localhost:8080/rew/${id}`)
    const data =await result.json()
    setdata(data);
  }
  console.log(data)
  useEffect(() => {
    getdata();
  }, [])
  return (
    <div>
        <h1>
        Review

        </h1>
        {data.map(d=>
 <div class="card text-white bg-primary mb-3" styles="max-width: 18rem;">
 <div class="card-header">{d.name}</div>
 <div class="card-body">
   {/* <h5 class="card-title">Primary card title</h5> */}
   <p class="card-text">{d.comment}</p>
   <p class="card-text">{d.rating}</p>
 </div>
       </div>
          )}
       
        <form action="">
            <label >Name</label>
            <input type="text" />
            <label>Comment</label>
            <input type="text" />
            <label >Rating</label>
            <input type="number" />
            
            
                   </form>
        </div>
  )
}

export default Reiew