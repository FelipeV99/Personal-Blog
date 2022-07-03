import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, doc, getDocs } from 'firebase/firestore'
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineEllipsis } from 'react-icons/ai'
import './uniquePost.css'
const UniquePost = () => {
  const navigate = useNavigate()
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
  } else {
    return (
      <>
        {/* <p>{uniquePost.id}</p> */}
        <button onClick={()=>{navigate(-1)}}>Back</button>
        <h5 className='container-85 margin-h5'>{uniquePost.title}</h5>
        
        <div className='container-85 flex-me'>
          <div className='div-profile-img'>
            <img className='profile-img' src={uniquePost.profileImage} alt="Author" />
          </div>
          <div className='div-name-and-info'>
            <p className='body-squished grey-2 font-medium'>{uniquePost.author}</p>
            <div className='div-info'>
              <AiOutlineClockCircle className='icon-small' />
              <p className='caption-p body-squished'>{uniquePost.date}</p>
              <AiOutlineComment className='icon-small' />
              <p className='caption-p body-squished'>2 comments</p>
            </div>
          </div>
        </div>
        <img className='main-img' src={uniquePost.postMainImage} alt={uniquePost.title} />

        <div className="container-85">
          <p className="text-content">{uniquePost.content}</p>
        </div>
       
      </>
    )
  }
}

export default UniquePost