import React from 'react'
import {useState} from "react"
import {AiOutlineEye, AiOutlineEyeVisible} from 'react-icons/ai'

export const LoginForm = () => {

  const [formData, setFormData] =useState({
    email:"", password:""
  });

  const [showPassword, setShowPassword] =useState(false);

  function changeHandler(event)
  {
    setFormData((prevData) =>(
        {
            ...prevData,
            [event.target.name]: event.target.value
        }
    ))
  }

  return (
   <form>
      <label>
        <p>Email Address <sup>*</sup></p>
     
      <input type="text" required value={formData.email}
      onChange={changeHandler} name="email" placeholder="Enter email id"/>
       </label>

       <label>
        <p>Password <sup>*</sup></p>
     
      <input type={showPassword ?("text") :("password")} required value={formData.password}
      onChange={changeHandler} name="password" placeholder="Enter password"/>
       

      <span onClick ={()=> setShowPassword((prev) => !prev)}>
        {showPassword ? (<AiOutlineEyeVisible/>) : (<AiOutlineEye/>)}
      </span>

      <Link to="#">
           <p>Forgot Password</p>
      </Link>
      </label>

      <button>Sign In</button>

   </form>
  )
}
export default LoginForm;