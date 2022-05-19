import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Update() {
    const{name,pric,loc,id}=useParams();
    const [cname,setname]=useState(name)
    const [cloc,setloc]=useState(loc)
    const [price,setprice]=useState(pric)
    // const [cid,setid]=useState(id)

    // async function updatedata(){
    //     try{
    //         const body={cname,cloc,price}
    //         const result =fetch(`http://localhost:8080/crud/${id}`,{
    //             method:'PUT',
    //             headers:{"Content-type":"application/json"},
    //             body:JSON.stringify(body)

    //         })

    //     }catch(e){

    //         console.log(e);
    //     }
    // }
    async function updatedata(){
        try{
      const body={cname,cloc,price}
      const result=await fetch(`http://localhost:8080/crud/${id}`,{
        method:'PUT',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(body)
      })
      // setdata(data.filter(d=>d.c_id!==id))
      }catch(e){
        console.log(e)
      }
      }
  return (
    <div>
        <h1>Update</h1>
        <form onSubmit={updatedata}>

        <label>Name</label>
        <input type="text" className='form-control' value={cname} onChange={(e)=>setname(e.target.value)}/>
        <label>Location</label>
        <input type="text" value={cloc}  className='form-control' onChange={(e)=>setloc(e.target.value)}/>
        <label>Price</label>
        <input type="text" value={price}  className='form-control' onChange={(e)=>setprice(e.target.value)}/>
       <br />
        <button className='btn btn-primary'>UPDATE</button>
        </form>
    </div>
  )
}

export default Update
