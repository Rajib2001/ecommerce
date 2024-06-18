import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'
const AdminDashboard = () => {
  const[auth]=useAuth();
  return (
    <Layout>
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3  ">
          <AdminMenu/>
        </div>
        <div className="col-md-9">
          <div className="card w-75 p-3">
            <h3>Admin_Name: {auth?.user.name}</h3> 
              
          <h3> Admin_Email: {auth?.user.email}</h3> 
           <h3> Admin_Address: {auth?.user.address} </h3> 
            <h3>Admin_Phone: {auth?.user.phone} </h3> 
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default AdminDashboard
