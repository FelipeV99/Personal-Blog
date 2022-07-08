import React, { useRef } from 'react'
import ReactDom from 'react-dom'
import './signInModal.css'


const SignIn = (props) => {
    const imgRef = useRef()
    const inputImageRef = useRef()

    const placeImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0]
        console.log(file.name)
        console.log(inputImageRef.current)
        let formData = new FormData()
        formData.append("image", e.target.files[0])
        fetch("https://api.imgur.com/3/upload",{
            method: 'POST',
            headers:{
                'Authorization': 'Client-ID d90892906705b2e'
            },
            body: formData
        }).then(data => data.json()).then(data =>{
            console.log(data)
            imgRef.current = data.data.link
        }).catch(error => console.log(error))
    }

    if (props.open === false) return null
    return (ReactDom.createPortal(
        <>
            <div className="overlay-style">
                <div className='modal-style'>
                    <button className='btn-sec' onClick={props.close}>Back</button>
                    <label>Username</label>
                    <input type="text" />
                    <label>password</label>
                    <input type="password" />
                    <button>Create Account</button>
                    <label>Your Profile Image</label>
                    
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <input type="file" ref={inputImageRef} onChange={(e)=>{placeImage(e)}} />
                        
                        <button type='submit'>Submit Image</button>
                    </form>
                    <img className="invisible" src=""  />
                    <p ref={imgRef}>ayo</p>
                </div>
            </div>
        </>,
        document.getElementById('portal'))
    )
}

export default SignIn