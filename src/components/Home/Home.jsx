import { useNavigate } from "react-router-dom";
// import { db } from '../../firebase-config'
// import { collection, doc, deleteDoc, getDocs } from 'firebase/firestore'
import { useContext } from "react";
import { postsContext } from '../../App.js'

const Home = () => {
  const navigate = useNavigate()
  let bPosts = useContext(postsContext)
  const posts = bPosts.posts
  return(
    <>
    <div>
      <button className="btn-pri" onClick={()=>{navigate("/signIn")}}>Sign Up/In</button>
      {posts.map((post) =>{
        return(
          <div key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{post.content}</p>
            <p>{post.date}</p>
            <button className="btn-delete">Delete</button>
            <button className="btn-sec" onClick={()=>{navigate("/edit/"+post.id)}}>Edit</button>
            <button className="btn-pri" onClick={()=>{navigate("/latest-posts")}}>Latest posts</button>
          </div>
        )
      })}
    </div>
    </>
  )

}

export default Home