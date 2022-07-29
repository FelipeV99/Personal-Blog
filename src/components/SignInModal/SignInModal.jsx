import React, { useRef } from 'react'
import ReactDom from 'react-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase-config.js'
import './signInModal.css'
import { async } from '@firebase/util'
import ButtonSign from '../Buttons/ButtonSign/ButtonSign.jsx'
import {AiOutlineClose} from 'react-icons/ai'


const SignIn = (props) => {
    // const imgRef = useRef()
    // const inputImageRef = useRef()

    const userRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

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

    const register = async () => {
        try {
            const newUser = await createUserWithEmailAndPassword(auth, userRef.current, passwordRef.current)
            console.log(newUser)
        } catch {
            console.log("error")
        }
    }

    const logout = async () => {
        await signOut(auth)

    }

    const login = async () => {
        try {
            const newUser = await signInWithEmailAndPassword(auth, userRef.current, passwordRef.current)
            console.log("lemme get in this bitch",newUser)
            
        } catch {
            console.log("erorr")
        }


    }

    if (props.open === false) return null
    return (ReactDom.createPortal(
        <>
            <div className="overlay-style">
                <div className='modal-style'>
                    {/* <button className='btn-sec' onClick={props.close}>Back</button> */}
                    <h1 className="text-align-center">Welcome to Blo</h1>
                    <h1 className="text-align-center">Sign Up</h1>
                    <ButtonSign />
                    <ButtonSign />
                    <p>or sign up with email</p>
                    <label>Name</label>
                    <input type="text" onChange={(e) => { userRef.current = e.target.value }} ref={userRef} />
                    <label>Mail</label>
                    <input type="text" onChange={(e) => { emailRef.current = e.target.value }} ref={emailRef} />
                    <label>password</label>
                    <input type="password" onChange={(e) => { passwordRef.current = e.target.value }} ref={passwordRef} />
                    <input type="password" onChange={(e) => { passwordRef.current = e.target.value }} ref={passwordRef} />
                    <button className='btn-pri' onClick={() => { register() }}>Sign Up</button>
                    <p>Already have an account?</p><p>Login</p>
                    <AiOutlineClose onClick={props.close} size={20}/>

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