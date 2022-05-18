import React, { useEffect, useState } from 'react'

function Todo() {
const[data,setdata]=useState([]);
const[cname,setname]=useState("");
const[price,setprice]=useState("");
const[cloc,setloc]=useState("");
const[id,setid]=useState("");
async function getdata(){
 const result = await fetch('http://localhost:8080/crud')
  const data =await result.json()
  setdata(data);
}
useEffect(() => {
  getdata();
}, [])

async function postdata(e){
  e.preventDefault();
  try{
  const body={cname,cloc,price}
  const result=await fetch('http://localhost:8080/crud',{
    method:'POST',
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(body)
  })
  }catch(e){
    console.log(e)
  }
}
async function deletedata(id){
    try{
  // const body={cname,cloc,price}
  const result=await fetch(`http://localhost:8080/crud/${id}`,{
    method:'DELETE',
    // headers:{"Content-type":"application/json"},
    // body:JSON.stringify(body)
  })
  setdata(data.filter(d=>d.c_id!==id))
  }catch(e){
    console.log(e)
  }
}


async function updatedata(id){
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
// console.log(data)
// console.log(result)
const setter=(name,loc,price,id)=>{
setname(name);
setloc(loc);
setprice(price);
setid(id)

}



  return (
    <div>
      <form onSubmit={postdata}>
        <label>Restaurant</label>
        <input type="text" value={cname} onChange={(e)=>setname(e.target.value)} />
        <label>location</label>
        <input type="text" value={cloc} onChange={(e)=>setloc(e.target.value)} />
        <label>Price</label>
        <input type="text"value={price} onChange={(e)=>setprice(e.target.value)}   />
        <button>ADD</button>
        {/* <button onClick={()=>updatedata(id)}>UPDATE</button> */}
      </form>
      <form type="submit" >
        <label>Restaurant</label>
        <input type="text" value={cname} onChange={(e)=>setname(e.target.value)} />
        <label>location</label>
        <input type="text" value={cloc} onChange={(e)=>setloc(e.target.value)} />
        <label>Price</label>
        <input type="text"value={price} onChange={(e)=>setprice(e.target.value)}   />
        <button>ADD</button>
        <button onClick={()=>updatedata(id)}>UPDATE</button>
      </form>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Restaurant</th>
      <th scope="col">Location</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  {data.map(d=>(
    <tbody>
    <tr>
      <th scope="row">{d.c_id}</th>
      <td>{d.cname}</td>
      <td>{d.cloc}</td>
      <td>{d.price}</td>
      <td><button onClick={()=>setter(d.cname,d.cloc,d.price,d.c_id)}>EDIT</button></td>
      <td><button onClick={()=>deletedata(d.c_id)}>DELETE</button></td>
    </tr>
  </tbody>
  ))}
  
</table>
    </div>
  )
}

export default Todo