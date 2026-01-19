import React from 'react'
import "./user.css"

const user = () => {
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
                <tr>
                    <td>1</td>
                    <td>jhon</td>
                    <td>jayavardhan9911@gmail.com</td>
                    <td>5/543</td>
                    <td className='abc'>
                        <button type="button" class="btn btn-success"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                        </td>
                </tr>
            </tbody>

        </table>
    </div>
  )
}

export default user