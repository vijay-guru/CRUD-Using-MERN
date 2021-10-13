import React,{useState} from 'react'
import axios from 'axios'
function Update() {
     const[name,setname]=useState('')
     const[username,setusername]=useState('')
     const[password,setpassword]=useState('')
     function update(event){
         event.preventDefault()
         var user={
             name:name,
             username:username,
             password:password
         }
        axios.post('/api/user/update',user).then(res=>{
            alert(res.data)
        }).catch(err=>{
            console.log(err)
        })
     }
    return (
        <div>
            <form>
                <h1>Update</h1>
                <input type="text" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control"/>
                <input type="text" placeholder="username (username cannot be changed)" value={username} onChange={(e)=>{setusername(e.target.value)}} className="form-control"/>
                <input type="text" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="form-control"/>
                <button onClick={update} className="btn "><strong>Update</strong></button>
                <button  className="btn "><strong>Refresh</strong></button>
            </form>
        </div>
    )
}

export default Update