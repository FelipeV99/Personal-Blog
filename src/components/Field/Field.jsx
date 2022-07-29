import React from 'react'
import './field.css'
import {AiFillIdcard, AiFillMail, AiFillLock} from 'react-icons/ai'

const Field = (props) => {
  if(props.service === 'Name'){
  return (
    <div className='field-sign'>
      <div className='grey-square'>
        <AiFillIdcard className='logo' color="#F6F6F6" size={20}/>
      </div>
      <input type="text" placeholder="Name" className='input-style'/>   
    </div>
  )
  }
  if(props.service === 'Mail'){
    return (
      <div className='field-sign'>
        <div className='grey-square'>
        <AiFillMail className='logo' color="#F6F6F6" size={20}/>
        </div>
        
        <input type="text" placeholder="Email" className='input-style'/>
      </div>
    )
  }
  if(props.service === 'Password'){
    return (
      <div className='field-sign'>
        <div className='grey-square'>
        <AiFillLock className='logo' color="#F6F6F6" size={20}/>
        </div>
        
        <input type="password" placeholder="Password" className='input-style'/>
      </div>
    )
  }
  if(props.service === 'Confirm Password'){
    return (
      <div className='field-sign'>
        <div className='grey-square'>
        <AiFillLock className='logo' color="#F6F6F6" size={20}/>
        </div>
        
        <input type="password" placeholder="Password" className='input-style'/>
      </div>
    )
  }
}

export default Field