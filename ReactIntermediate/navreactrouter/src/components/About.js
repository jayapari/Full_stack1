import React from 'react'
import {useNavigate} from 'react-router-dom'

export const About = () => {

    const navigate = useNavigate();

   function clickHandler()
   {
    //move to about page
    navigate("/support");
   }
  return (
    <div>About page
       <div>
            <button onClick={clickHandler}>Move to support page</button>
        </div>

    </div>
  )
}
export default About;