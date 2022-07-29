import { collection, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const EditPost = () => {
    // const inputRef = useRef()

    // const params = useParams()
    // const navigate = useNavigate();
    // let bPosts = useContext(postsContext)
    // const posts = bPosts.posts
    // const post = posts.filter((post) => post.id == params.id)[0]

    // const postToUpdate = doc(db, "posts", params.id)
    // const updatePost = async (newTitle) => {
    //     console.log("work")
    //     await updateDoc(postToUpdate, { title: newTitle })
    // }

    // const deletePostInDB = async () => {
    //     await deleteDoc(postToUpdate)
    // }
    // const showRef = () =>{
    //     console.log("reff", inputRef.current)
    // }
    



    // console.log(post)
    // if (typeof post === 'undefined') {
    // } else {
    //     return (
    //         <>
    //             <div>EditPost</div>
    //             <button onClick={() => { navigate("/") }}>Go back</button>
    //             <p>{post.title}</p>
    //             {/* <form action="" onSubmit={() => { updatePost() }} > */}
    //                 <label>New Title</label>
    //                 <input type="text" name="new-title" ref={inputRef} onChange={(event)=>{inputRef.current = event.target.value}} required />
    //                 <button type="submit" onClick={() => { updatePost(inputRef.current) }}>Edit</button>
    //             {/* </form> */}
    //             <button onClick={() => {
    //                 deletePostInDB()
    //             }}>delete</button>

    //             <button onClick={()=>{showRef()}}>Show Ref On Console</button>
    //         </>

    //     )
    // }
}

export default EditPost