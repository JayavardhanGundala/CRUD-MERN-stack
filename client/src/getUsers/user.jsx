import React, { useEffect, useState } from 'react'
import "./user.css"
import axios from "axios"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'



export const User = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get("http://localhost:5000/api/users")
            setUsers(response.data)
            

        }

        fetchData()


    },[])

    const deleteUser=async (userid)=>{
        await axios.delete(`http://localhost:5000/api/delete/user/${userid}`)
        .then((response)=>{
            setUsers((prevUser)=>prevUser.filter((user)=>user._id!==userid))
            toast.success(response.data.msg,{position:"top-right"})
        })
        .catch((error)=>{
            console.log(error)
        })

    }

  return (
    <div className="userTable">
        <Link to="/create" type="button" class="btn btn-primary">Add user <i class="fa-solid fa-user-plus"></i></Link>
        {users.length===0?(
            <div className='noData'>
                <h3>No Data To Display</h3>
                <p>Add New User</p>

            </div>

        ):(
        <table className='table table-bordered'>
            <thead>
                <tr>
                  <th scope='col'>S.No</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Address</th>
                  <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>{
                    return(
                    <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td className='abc'>
                        <Link to={`update/${user._id}`} type="button" class="btn btn-success"><i class="fa-regular fa-pen-to-square"></i></Link>
                        <button onClick={()=>deleteUser(user._id)} type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                        </td>
                     </tr>
                        
                    )
                })}
                
            </tbody>

        </table>

        )}




    </div>
  )
}

