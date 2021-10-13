
const express =require('express')
const app=express()
const mongoose=require('mongoose')
const router=express.Router()

mongoose.connect('mongodb://localhost:27017/mernauth',{useNewUrlParser:true,useUnifiedTopology:true},err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("MongoDB connected successfully");
    }
})
var userModel=mongoose.model('users',{name:String,username:String,password:String})
router.post('/registeruser',function (req,res){
       var newuser=new userModel({name:req.body.name,username:req.body.username,password:req.body.password})
       newuser.save(err=>{
           if(err){
               res.send("Something went wrong");
           }
           else{
               res.send("User registerd Succesfully");
           }
       })
})
router.post('/login',(req,res)=>{
    userModel.find({
        username:req.body.username,
        password:req.body.password
    },(err,document)=>{
        if(err){
            console.log("Something went wrong")
        }
        else{
            if(document.length==0){
                res.send("Login Failed")
            }
            else{
                res.send("Login Successfull")
            }
        }
    })
})
router.post('/getlist',(req,res)=>{
    userModel.find({},(err,documents)=>{
        if(err){
            console.log("Something went wrong")
        }
        else{
            res.send(documents)
        }
    })
})
router.post('/delete',(req,res)=>{
    userModel.remove({
        username:req.body.username,
        password:req.body.password
    },(err)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send("User details deleted successfully")
        }
    })
})
router.post('/update',(req,res)=>{
    userModel.updateOne({username:req.body.username},{$set:{name:req.body.name,password:req.body.password}},
    (err)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send("User details updated successfully")
        }
    })
})
module.exports=router;