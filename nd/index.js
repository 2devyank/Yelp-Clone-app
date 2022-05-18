const express=require('express')
const app=express()

const cors=require('cors')
const pool=require('./d')




app.use(cors())
app.use(express.json())


app.post('/crud', async (req,res)=>{
    try{
    const {cname,cloc,price}=req.body
    const newc=await pool.query('INSERT INTO crud (cname,cloc,price) VALUES ($1,$2,$3)',[cname,cloc,price])
  res.json(newc.rows)

}catch(e){
        console.log(e);
    }


})

app.post('/rew/:id', async (req,res)=>{
  try{
    const {id}=req.params;
  const {comm,name,rating}=req.body
  const newc=await pool.query('INSERT INTO rew (comment,name,rating,restaurants) VALUES ($1,$2,$3,$4)',[comm,name,rating,id])
res.json(newc.rows)

}catch(e){
      console.log(e);
  }


})

app.get('/rew/:id', async (req,res)=>{
  try{
    const {id}=req.params;
  // const {comm,name,rating}=req.body
  const newc=await pool.query('SELECT * FROM rew WHERE restaurants=$1',[id])
res.json(newc.rows)

}catch(e){
      console.log(e);
  }


})

app.get('/crud', async (req,res)=>{
    try{

    const newc=await pool.query('SELECT * FROM crud')
  res.json(newc.rows)

}catch(e){
        console.log(e);
    }


})
app.put('/crud/:id', async (req,res)=>{
    try{
    const {id}=req.params;
    const {cname,cloc,price}=req.body;
    const newc=await pool.query('UPDATE crud SET cname=$1,cloc=$2,price=$3 WHERE c_id=$4',[cname,cloc,price,id])
  res.json(newc)

}catch(e){
        console.log(e);
    }


})
app.delete('/crud/:id', async (req,res)=>{
    try{
    const {id}=req.params
    const newc=await pool.query('DELETE FROM crud WHERE c_id=$1',[id])
  res.json(newc)

}catch(e){
        console.log(e);
    }


})

app.listen(8080,console.log('listening on port 8080'))