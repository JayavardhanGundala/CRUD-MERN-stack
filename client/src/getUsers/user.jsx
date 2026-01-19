import React, { useEffect, useState } from 'react'
import "./user.css"
import axios from "axios"


export const User = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get("http://localhost:5000/api/users")
            setUsers(response.data)

        }

        fetchData()


    })

  return (
    <div className="userTable">
        <button type="button" class="btn btn-primary">Add user <i class="fa-solid fa-user-plus"></i></button>
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
                        <button type="button" class="btn btn-success"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                        </td>
                     </tr>
                        
                    )
                })}
                
            </tbody>

        </table>
    </div>
  )
}

