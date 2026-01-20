import React, { useState } from 'react'
import "./adduser.css"
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast"

const Add = () => {
    const users={
        name:"",
        email:"",
        address:""
    }
    const navigate=useNavigate()
    const [user,setUser]=useState(users)
    const handle=(e)=>{
        const {name,value}=e.target
        console.log(name,value)
        setUser({...user,[name]:value})


    }
    const submitForm=async(e)=>{
        e.preventDefault()
        await axios.post("https://crud-backend-bjyf.onrender.com/api/user",user)
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
        <h3>Add New User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor='name'>Name:</label>
                <input 
                type="text" 
                id='name'
                name='name'
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

export default Add