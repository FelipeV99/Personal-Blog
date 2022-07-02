import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, doc, getDocs } from 'firebase/firestore'
const UniquePost = () => {
  const params = useParams()
  const [posts, setPosts] = useState([])
  //we get the posts collection using the db we configured
  const postsCollectionRef = collection(db, "posts")
  //useEffect that only renders once, notice the []
  //also, you can't use async in the anonimous function, that's why we create
  //another function inside the anonimous funciton
  useEffect(() => {
    const getPosts = async () => {
      //get all docs from the collection that we referenced before
      //however, it returns a bunch of data we don't need
      const data = await getDocs(postsCollectionRef)
      //here, we pick only the properies and values that we need from the collection
      setPosts(data.docs.map((doc) => ({
        //using the spred to mix properties and values inside doc.data() with id:doc.id
        ...doc.data(), id: doc.id
      })
      ))
    }
    getPosts()
  }, [])

  const uniquePost = posts.filter((post) => post.id == params.id)[0]
  
  if (typeof uniquePost === 'undefined') {
  }else{
    return (
      <>
        <p>{uniquePost.id}</p>
        <p>{uniquePost.title}</p>
        <img src={uniquePost.postImage} alt={uniquePost.title} />
        <p>{uniquePost.content}</p>
        
      </>
    )
  }
}

export default UniquePost