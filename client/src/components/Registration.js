import React,{useState} from 'react'
import axios from 'axios'
function Registration() {
     const[name,setname]=useState('')
     const[username,setusername]=useState('')
     const[password,setpassword]=useState('')
    
     function register(event){
         var users={
             name:name,
             username:username,
             password:password
         }
         axios.post('/api/user/registeruser',users).then(res=>{
             alert(res.data);
         }).catch(err=>{
             
         })
     }

    return (
        <div>
            <form>
                <h1>Register</h1>
                <input type="text" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control"/>
                <input type="text" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}} className="form-control"/>
                <input type="text" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="form-control"/>
                <button onClick={register} className="btn"><strong>Register</strong></button>
            </form>
        </div>
    )
}

export default Registration
