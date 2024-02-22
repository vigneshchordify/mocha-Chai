
const express=require('express')


const app=express()

port =8000

app.use(express.json())

app.use('/user',require('./routes/user'))

app.listen(port,()=>{
    console.log(`your port is running in ${port}`);
})