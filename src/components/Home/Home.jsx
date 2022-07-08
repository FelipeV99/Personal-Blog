import { useNavigate } from "react-router-dom";
import './home.css'
import '../LatestPosts/LatestPosts.jsx'
import LatestPosts from "../LatestPosts/LatestPosts.jsx";
import { useState } from "react";
import SignIn from '../SignInModal/SignInModal.jsx'

const Home = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  return(
    <>
    <div className="div-hero main-blue-bg">
      <h1 className="light">Find The Best Stories</h1>
      <p className="light">You can also write and share you ideas</p>
      <button className="btn-pri-alt" onClick={()=>{setIsOpen(true)}}>Sign Up/In</button>
      <SignIn open={isOpen} close={()=>{setIsOpen(false)}}> </SignIn>
      

    </div>
    <LatestPosts />
    </>
  )

}

export default Home