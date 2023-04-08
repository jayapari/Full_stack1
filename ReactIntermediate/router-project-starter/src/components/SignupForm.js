import React from 'react'
import {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeVisible} from 'react-icons/ai'


export const SignupForm = () => {

const [formdata, setFormData] = useState({
  firstname:"", lastname:"",email:"",password:"",confirmPassword:""
})

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
    <div>
      <div>
    <button>Student</button>
    <button>Instructor</button>
   </div>
   <form>
    <div>
        <label>
          <p>First Name <sup>*</sup></p>
          <input type="text" 
          placeholder="enter first name"
          required 
          name="firstname"
          onChange={changeHandler}
          value={formdata.firstname}
          />
        </label>

        <label>
          <p>Last Name <sup>*</sup></p>
          <input type="text" 
          placeholder="enter last name"
          required 
          name="lastname"
          onChange={changeHandler}
          value={formdata.lastname}
          />
        </label>
    </div>
 
    <label>
          <p>Email Address <sup>*</sup></p>
          <input type="text" 
          placeholder="enter email address"
          required 
          name="email"
          onChange={changeHandler}
          value={formdata.email}
          />
        </label>

    <div>
    <label>
          <p>Create Password <sup>*</sup></p>
          <input type={showPassword ?("text") :("password")} 
          placeholder="enter password"
          required 
          name="password"
          onChange={changeHandler}
          value={formdata.password}
          />

          <span onClick ={()=> setShowPassword((prev) => !prev)}>
                  {showPassword ? (<AiOutlineEyeVisible/>) : (<AiOutlineEye/>)}
          </span>
        </label>

        <label>
          <p>Confirm Password <sup>*</sup></p>
          <input type={showPassword ?("text") :("password")} 
          placeholder="enter confirm password"
          required 
          name="confirmpassword"
          onChange={changeHandler}
          value={formdata.confirmPassword}
          />

          <span onClick ={()=> setShowPassword((prev) => !prev)}>
                  {showPassword ? (<AiOutlineEyeVisible/>) : (<AiOutlineEye/>)}
          </span>
        </label>
    </div>

         <button>CReate Account</button>
   </form>
    </div>
   
  )
}
export default SignupForm;
