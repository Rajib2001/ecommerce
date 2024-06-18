import { React, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from "react-hot-toast"
import axios from "axios"
import {useNavigate} from"react-router-dom"

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate=useNavigate()

    // form function
    const handlerSubmit = async(e) => {
        e.preventDefault()
        try {
            const res=await axios.post("http://localhost:8080/api/v1/auth/forgot-password",{
                email,
                newPassword,
                answer
                
            },{
                // headers:{"Content-Type" : "application/json"}
             });
            if(res && res.data.success){
                toast.success(res && res.data.message)
                navigate("/login")
            }else{
                toast.error(res.data.message)
            }

            
        } catch (error) {

            console.log(error)
            toast.error("Something went wrong !!")
            
        } 

    }





  return (
    <Layout title="forgotPassword- Ecommerce-App">
        <div className="form-container">


<form onSubmit={handlerSubmit}>
    <h4 className="title">RESET PASSWORD</h4>
    <div className="mb-3">
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email "
            required
        />
    </div>
    <div className="mb-3">
        <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your new Bestfriend Name"
            required
        />
    </div>

    <div className="mb-3">
        <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your new Password"
            required
        />
    </div>

    
    <button type="submit" className="btn btn-primary">
        RESET PASSWORD
    </button>
</form>
</div>
      
    </Layout>
  )
}

export default ForgotPassword
