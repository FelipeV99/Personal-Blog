import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

const CreatePost = () => {
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();
  const tagsRef = useRef();

  const navigate = useNavigate()

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  const postsCollectionRef = collection(db, "posts");
  const createPostInDB = async () => {
    console.log("db",authorRef.current, today, contentRef.current)
    await addDoc(postsCollectionRef, { author: authorRef.current, date:today, content: contentRef.current, tags: tagsRef.current, title: titleRef.current })
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
        console.log(titleRef.current, tagsRef.current, contentRef.current, authorRef.current)}}>Submit</button>
      {/* </form> */}
    </>
  )
}

export default CreatePost