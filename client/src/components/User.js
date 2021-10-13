import React,{useState,useEffect} from 'react'
import axios from 'axios'
function User() {
    const[userlist,setuserlist]=useState([])
   useEffect(()=>{ 
       axios.post('/api/user/getlist').then(res=>{
           setuserlist(res.data)
       }).catch(err=>{
           console.log(err)
       })
   }
   ,[])
    const user=userlist.map(obj=>{
        return <tr>
            <td>{obj.name}</td>
            <td>{obj.username}</td>
            <td>{obj.password}</td>
        </tr>
    })
    return (
        <div>
            <h1>Users List</h1>
            
            <div >
            <table className="table-dark table ">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                {user}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default User
