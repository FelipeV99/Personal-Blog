import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()

    const registerUser = async () =>{

    }

    const loginUser = async () =>{

    }

    const logoutUser = async () =>{
        
    }

    return (
        <div>
            <button className='btn-sec' onClick={()=>{navigate(-1)}}>Back</button>
            <label>Username</label>
            <input type="text" />
            <label>password</label>
            <input type="password" />
            <button>Create Account</button>
        </div>
    )
}

export default SignIn