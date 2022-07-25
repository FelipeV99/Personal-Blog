import './home.css'
import '../LatestPosts/LatestPosts.jsx'
import LatestPosts from "../LatestPosts/LatestPosts.jsx";
import { useState } from "react";
import SignIn from '../SignInModal/SignInModal.jsx'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="div-hero">
        <img className="hero-img" src={require('../../assets/HeroBg.png')} alt="pen" />
        <div className="hero-content">
          <h1 className="font-dark1">READ</h1>
          <h1 className="font-dark1">WRITE</h1>
          <h1 className="font-dark1">SHARE</h1>
          <p className="font-dark1 hero-copy">Your best ideas, stories & opinions</p>
          <button className="btn-pri-alt"  id="cta" onClick={() => { setIsOpen(true) }}>Get Started</button>
          <SignIn open={isOpen} close={() => { setIsOpen(false) }}> </SignIn>
        </div>
      </div>
      <LatestPosts />
    </>
  )

}

export default Home