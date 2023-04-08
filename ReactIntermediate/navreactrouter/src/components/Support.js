import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Support = () => {
const navigate =useNavigate();

function backHandler()
{
    navigate(-1);
}

  return (
    <div>Support
        <button onClick={backHandler}>Go Back</button>
    </div>

  )
}
export default Support;