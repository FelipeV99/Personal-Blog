import React from 'react'
import './buttonsign.css'
import {AiFillGoogleSquare, AiFillFacebook} from 'react-icons/ai'

const ButtonSign = (props) => {
  if(props.service === 'Google'){
  return (
    <div className='btn-google btn-sign'>
      <div className='red-square'>
        <AiFillGoogleSquare className='logo' color="#F6F6F6" size={20}/>
      </div>
      <p className='btn-sign-p'>Sign up with Google</p>
    </div>
  )
  }
  if(props.service === 'Facebook'){
    return (
      <div className='btn-fb btn-sign'>
        <div className='blue-square'>
        <AiFillFacebook className='logo' color="#F6F6F6" size={20}/>
        </div>
        
        <p className='btn-sign-p'>Sign up with Facebook</p>
      </div>
    )
  }
}

export default ButtonSign