import { useRef } from 'react'
import './field.css'
import {AiFillIdcard, AiFillMail, AiFillLock} from 'react-icons/ai'

const Field = (props) => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const setRefandSendDad = (name) =>{
        nameRef.current = name
        props.passName(nameRef.current)
    }

    const setMailandSendDad = (email) =>{
        emailRef.current = email
        props.passEmail(emailRef.current)
    }

    const setPasswordandSendDad = (password) =>{
        passwordRef.current = password
        props.passPassword(passwordRef.current)
    }

    const setConfirmPasswordandSendDad = (confirmPassword) =>{
        confirmPasswordRef.current = confirmPassword
        props.passConfirmPassword(confirmPasswordRef.current)
    }


  if(props.service === 'Name'){
  return (
    <div className='field-sign'>
      <div className='grey-square'>
        <AiFillIdcard className='logo' color="#F6F6F6" size={20}/>
      </div>
      <input type="text" placeholder="Name" className='input-style' onChange={(e)=>{setRefandSendDad(e.target.value)}} ref={nameRef}/>   
    </div>
  )
  }
  if(props.service === 'Mail'){
    return (
      <div className='field-sign'>
        <div className='grey-square'>
        <AiFillMail className='logo' color="#F6F6F6" size={20}/>
        </div>
        
        <input type="text" placeholder="Email" className='input-style' onChange={(e)=>{setMailandSendDad(e.target.value)}} ref={emailRef}/>
      </div>
    )
  }
  if(props.service === 'Password'){
    return (
      <div className='field-sign'>
        <div className='grey-square'>
        <AiFillLock className='logo' color="#F6F6F6" size={20}/>
        </div>
        
        <input type="password" placeholder="Password" className='input-style' onChange={(e)=>{setPasswordandSendDad(e.target.value)}} ref={passwordRef}/>
      </div>
    )
  }
  if(props.service === 'Confirm Password'){
    return (
      <div className='field-sign'>
        <div className='grey-square'>
        <AiFillLock className='logo' color="#F6F6F6" size={20}/>
        </div>
        
        <input type="password" placeholder="Confirm Password" className='input-style' onChange={(e)=>{setConfirmPasswordandSendDad(e.target.value)}} ref={confirmPasswordRef}/>
      </div>
    )
  }
}

export default Field