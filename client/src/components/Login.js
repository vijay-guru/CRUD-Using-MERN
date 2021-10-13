import React,{useState} from 'react'
import axios from 'axios'
function Login() {
    const[username,setusername]=useState('')
     const[password,setpassword]=useState('')

     function login(event){
      event.preventDefault()
      var user={
          username:username,
          password:password
      }
     axios.post('/api/user/login',user).then(res=>{
         alert(res.data)
     }).catch(err=>{
         console.log(err)
     })
     }

    return (
        <div>
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}} className="form-control delete"/>
                <input type="text" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className="form-control delete"/>
                <button onClick={login} className="btn "><strong>Login</strong></button>
            </form>
        </div>
    )
}

export default Login
