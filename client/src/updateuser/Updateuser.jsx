/*import React from 'react'
import "./updateuser.css"

const Updateuser = () => {
  return (
    <div>Updateuser</div>
  )
}

export default Updateuser*/
import React, { useEffect, useState } from 'react'
import "./updateuser.css"
import { Link ,useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast"

const  Updateuser = () => {
    const users={
        name:"",
        email:"",
        address:""
    }
    const navigate=useNavigate()
    const {id}=useParams();
    const [user,setUser]=useState(users)
    const handle=(e)=>{
        const {name,value}=e.target
        console.log(name,value)
        setUser({...user,[name]:value})


    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/user/${id}`)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[id])
    const submitForm=async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:5000/api/user/update/${id}`,user)
        .then((response)=>{
            toast.success(response.data.msg,{position:"top-right"})
            navigate("/")
        })
        .catch((error)=>{
            console.log("form didnot sumbitted")
        })
    }
  return (
    <div className='addUser'>
        <Link to="/" type="button" class="btn btn-secondary">Back</Link>
        <h3>Update User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor='name'>Name:</label>
                <input 
                type="text" 
                id='name'
                name='name'
                value={user.name}
                autoComplete='off'
                placeholder='Enter the name'
                onChange={handle}
                
                
                />
            </div>
            <div className="inputGroup">
                <label htmlFor='email'>Email:</label>
                <input 
                type="text" 
                id='email'
                value={user.email}
                name='email'
                autoComplete='off'
                placeholder='Enter the email'
                onChange={handle}
                
                
                />
            </div>
            <div className="inputGroup">
                <label htmlFor='address'>Address:</label>
                <input 
                type="text" 
                value={user.address}
                id='address'
                name='address'
                autoComplete='off'
                placeholder='Enter your address'
                onChange={handle}
                
                
                />
            </div>
            <div className="inputGroup">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>


        </form>

    </div>
  )
}

export default Updateuser