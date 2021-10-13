import axios from 'axios'
import React,{useState} from 'react'

function Delete() {
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    function delet(event){
        var user={
            username:username,
            password:password
        }
        axios.post('/api/user/delete',user).then(res=>{
            alert(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <form>
                <h1>Delete</h1>
                <input type="text" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}} className="form-control delete"/>
                <input type="text" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}  className="form-control delete"/>
                <button onClick={delet} className="btn"><strong>Delete</strong></button>
            </form>
        </div>
    )
}

export default Delete
