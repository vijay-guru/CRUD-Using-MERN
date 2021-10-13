const express=require('express')
const app=express()
const userroute=require('./routes/Userroute')

app.use(require('body-parser').urlencoded({extended:true}));
app.use(require('body-parser').json());
app.use('/api/user',userroute);

app.get('/',(req,res)=>{
    res.send("this is backend")
})
app.listen(5000,(err)=>{
   if(err){
       console.log(err);
   }
   else{
       console.log("Server started successfully at port 5000");
   }
})