import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js'

const CreatePost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();
  const tagsRef = useRef();
  const editorRef = useRef();

      const imgRef = useRef()
    const inputImageRef = useRef()


  const navigate = useNavigate()

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  const postsCollectionRef = collection(db, "posts");
  const createPostInDB = async () => {
    console.log("db", authorRef.current, today, contentRef.current)
    console.log(editorRef.current)
    await addDoc(postsCollectionRef, { author: authorRef.current, date: today, content: contentRef.current, tags: tagsRef.current, title: titleRef.current })
  }

  const placeImage = (e) => {
    e.preventDefault();
    let formData = new FormData()
    formData.append("image", e.target.files[0])
    fetch("https://api.imgur.com/3/upload", {
      method: 'POST',
      headers: {
        'Authorization': 'Client-ID d90892906705b2e'
      },
      body: formData
    }).then(data => data.json()).then(data => {
      console.log(data)
      imgRef.current = data.data.link
    }).catch(error => console.log(error))
  }


  return (
    <>
      <button className='btn-sec' onClick={() => { navigate("/") }}>Back</button>
      {/* <form onSubmit={()=>{createPostInDB()}}> */}
      <label htmlFor="title">Title</label>
      <input type="text" name="title" onChange={(event) => { titleRef.current = event.target.value }} ref={titleRef} required />
      <label htmlFor="author">Author</label>
      <input type="text" name="author" onChange={(event) => { authorRef.current = event.target.value }} ref={authorRef} required />
      <label htmlFor="tags">Tags</label>
      <input type="text" name="tags" onChange={(event) => { tagsRef.current = event.target.value }} ref={tagsRef} required />
      <label htmlFor="content">Content</label>
      <textarea type="text" name="content" onChange={(event) => { contentRef.current = event.target.value }} ref={contentRef} required />

      <button type="submit" onClick={() => {
        createPostInDB()
        console.log(titleRef.current, tagsRef.current, contentRef.current, authorRef.current)
      }}>Submit</button>
      {/* </form> */}
      <form onSubmit={(e) => { e.preventDefault() }}>
        <input type="file" ref={inputImageRef} onChange={(e) => { placeImage(e) }} />

        <button type='submit'>Submit Image</button>
      </form>
      <img className="invisible" src="" />
      <p ref={imgRef}>ayo</p>
    </>
  )
}

export default CreatePost