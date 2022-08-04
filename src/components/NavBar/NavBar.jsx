import { useState } from 'react'
import { AiOutlineUser, AiOutlineSearch, AiOutlineEdit, AiOutlineHome } from 'react-icons/ai'
import './navbar.css'
import SignIn from '../SignInModal/SignInModal.jsx'
import {useNavigate} from 'react-router-dom'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigation = useNavigate()
  return (
    <div className='my-nav'>
      <div className='nav-items'>
        <AiOutlineUser onClick={() => { setIsOpen(true) }} size={20} />
        <SignIn open={isOpen} close={() => { setIsOpen(false) }}> </SignIn>
        <AiOutlineEdit onClick={()=>{navigation("/create-blog")}} size={20} />
        <AiOutlineSearch size={20} />
        <AiOutlineHome size={20} />
      </div>
    </div>
  )
}

export default NavBar