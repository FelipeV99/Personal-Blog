import React, { useRef, useState } from 'react'
import ReactDom from 'react-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase-config.js'
import './signInModal.css'
import { async } from '@firebase/util'
import ButtonSign from '../Buttons/ButtonSign/ButtonSign.jsx'
import {AiOutlineClose} from 'react-icons/ai'
import {useAuth} from '../Contexts/AuthContext'


const SignIn = (props) => {
    // const imgRef = useRef()
    // const inputImageRef = useRef()
    const nameRef = useRef()
    const userRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
  
    async function handleSubmit(e) {
      e.preventDefault()
      console.log("ayo")
      console.log(passwordRef.current)
      console.log(confirmPasswordRef.current)
      console.log(emailRef.current)
  
      if (passwordRef.current !== confirmPasswordRef.current) {
        return setError("Passwords do not match")
      }
  
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.currrent, passwordRef.current)
      } catch {
        setError("Failed to create an account")
      }
  
      setLoading(false)
    }

    // const placeImage = (e) => {
    //     e.preventDefault();
    //     let formData = new FormData()
    //     formData.append("image", e.target.files[0])
    //     fetch("https://api.imgur.com/3/upload",{
    //         method: 'POST',
    //         headers:{
    //             'Authorization': 'Client-ID d90892906705b2e'
    //         },
    //         body: formData
    //     }).then(data => data.json()).then(data =>{
    //         console.log(data)
    //         imgRef.current = data.data.link
    //     }).catch(error => console.log(error))
    // }

    // const register = async () => {
    //     try {
    //         const newUser = await createUserWithEmailAndPassword(auth, userRef.current, passRef.current)
    //         console.log(newUser)
    //     } catch {
    //         console.log("error")
    //     }
    // }

    // const logout = async () => {
    //     await signOut(auth)

    // }

    // const login = async () => {
    //     try {
    //         const newUser = await signInWithEmailAndPassword(auth, userRef.current, passRef.current)
    //         console.log("lemme get in this bitch",newUser)
            
    //     } catch {
    //         console.log("erorr")
    //     }


    // }

    const passName = (name) =>{
        nameRef.current = name
        console.log(name)
    }

    const passEmail = (email) =>{
        emailRef.current = email
        // console.log(email)
    }
    const passPassword = (password) =>{
        passwordRef.current = password
        console.log(password)
    }
    const passConfirmPassword = (confirmPassword) =>{
        confirmPasswordRef.current = confirmPassword
        console.log(confirmPassword)
    }

    if (props.open === false) return null
    return (ReactDom.createPortal(
        <>
            <div className="overlay-style">
                <div className='modal-style'>
                    {/* <button className='btn-sec' onClick={props.close}>Back</button> */}
                    <h1 className="text-align-center">Welcome to Blo</h1>
<<<<<<< HEAD
                    <h1 className="text-align-center margin-bottom-h1">Sign Up</h1>
                    <p>{currentUser && currentUser.email}</p>
                    <p>{error}</p>
                    <ButtonSign service='Google' />
                    <ButtonSign service='Facebook'/>
                    <p id="or-p">or</p>
                    <Field service="Name" passName={passName}/>
                    <Field service="Mail" passEmail={passEmail} />
                    <Field service="Password" passPassword={passPassword}/>
                    <Field service="Confirm Password" passConfirmPassword={passConfirmPassword}/>
                    {/* <label>Name</label>
=======
                    <h1 className="text-align-center">Sign Up</h1>
                    <ButtonSign />
                    <ButtonSign />
                    <p>or sign up with email</p>
                    <label>Name</label>
>>>>>>> parent of 612e2ca (aesthetic signup)
                    <input type="text" onChange={(e) => { userRef.current = e.target.value }} ref={userRef} />
                    <label>Mail</label>
                    <input type="text" onChange={(e) => { mailRef.current = e.target.value }} ref={mailRef} />
                    <label>password</label>
                    <input type="password" onChange={(e) => { passRef.current = e.target.value }} ref={passRef} />
<<<<<<< HEAD
                    <label>Confirm Password</label>
                    <input type="password" onChange={(e) => { passRef.current = e.target.value }} ref={passRef} /> */}
                    <button className='btn-pri btn-signup' onClick={handleSubmit}>Sign Up</button>
                    <p className='text-align-center'>Already have an account? <a>Login</a></p>
                    <AiOutlineClose className="align-icon" onClick={props.close} size={20}/>
=======
                    <input type="password" onChange={(e) => { passRef.current = e.target.value }} ref={passRef} />
                    <button className='btn-pri' onClick={() => { register() }}>Sign Up</button>
                    <p>Already have an account?</p><p>Login</p>
                    <AiOutlineClose onClick={props.close} size={20}/>
>>>>>>> parent of 612e2ca (aesthetic signup)

                    {/* <button onClick={() => { login() }}>Login</button>
                    <button onClick={() => { logout() }}>Logout</button>
                    <h4>User Logged In</h4> */}
                    {/* {auth.currentUser.email} */}


                    {/* <form onSubmit={(e)=>{e.preventDefault()}}>
                        <input type="file" ref={inputImageRef} onChange={(e)=>{placeImage(e)}} />
                        
                        <button type='submit'>Submit Image</button>
                    </form>
                    <img className="invisible" src=""  />
                    <p ref={imgRef}>ayo</p> */}
                </div>
            </div>
        </>,
        document.getElementById('portal'))
    )
}

export default SignIn