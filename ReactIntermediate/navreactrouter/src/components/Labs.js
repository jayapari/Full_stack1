import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Labs = () => {
  const navigate = useNavigate();

   function clickHandler()
   {
    //move to about page
    navigate("/about");
   }

  return (
    <div>Labs
        <div>
            <button onClick={clickHandler}>Move to about page</button>
        </div>
    </div>
  )
}

export default Labs;

